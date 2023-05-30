import Ele from '@/core/ele'
import themeTypes, { themePrefix, type Theme } from '@/config/page-themes'

export const HEAD = document.head
export const BODY = document.body
export const RAW_SELECTOR = 'pre'
export const HEADERS = 'h1, h2, h3, h4, h5, h6'
export const CONTENT_TYPES = ['text/plain', 'text/markdown']
export const mdFilePathPattern = /\.(mdx?|mkd|markdown)$/i
export const extPattern =
  /\.(html|jsonc?|vue|s?css|less|ya?ml|(?:c|m)?(?:j|t)sx?)$/i
export const dirPathPattern = /^file:\/\/(.*\/)+$/
export const isDirRoot = dirPathPattern.test(window.location.href)
export let dirPath = document.location.pathname
if (!dirPath.endsWith('/')) {
  dirPath += '/'
}

export const darkMediaQuery: MediaQueryList = window.matchMedia(
  '(prefers-color-scheme: dark)',
)

export const getMediaQueryTheme = (): Exclude<Theme, 'auto'> =>
  darkMediaQuery.matches ? 'dark' : 'light'

export const toTheme = (theme: Theme): Exclude<Theme, 'auto'> =>
  theme === 'auto' ? getMediaQueryTheme() : theme

export function getAssetsURL(path: string): string {
  return chrome.runtime.getURL(path)
}

export function getRawContainer(selector: string = RAW_SELECTOR): HTMLElement {
  return BODY.querySelector(selector)
}

export function getHeads(
  container: HTMLElement | Ele,
  selector: string = HEADERS,
): Array<HTMLElement> {
  return Array.from(
    (Ele.from(container) as HTMLElement).querySelectorAll(selector),
  )
}

export type FileItem = {
  name: string
  path: string
  isFolder: boolean
  size: number
  sizeUnit: string
  timestamp: number
  date: Date
  parentPath: string
}

export async function getDirData(url?: string): Promise<FileItem[]> {
  const regex =
    /addRow\("(.*?)",\s*"(.*?)",\s*(\d+),\s*(\d+),\s*"([\d.]+ [BkMG]B?)",\s*(\d+),\s*"(.*?)"\);/g
  const matches: FileItem[] = []
  let match: RegExpExecArray

  let html
  if (!url) {
    html = BODY.outerHTML
  } else {
    if (!url.endsWith('/')) {
      url += '/'
    }
    html = await fetchHTML(url)
  }
  while ((match = regex.exec(html)) !== null) {
    matches.push({
      name: match[1],
      path: match[2],
      isFolder: !!parseInt(match[3]),
      size: parseInt(match[4]),
      sizeUnit: match[5],
      timestamp: parseInt(match[6]),
      date: new Date(match[7]),
      parentPath: url,
    })
  }
  return matches
}

export async function fetchHTML(url): Promise<string> {
  return new Promise(resolve => {
    chrome.runtime.sendMessage(
      { action: 'fetch', data: 'file://' + url },
      resolve,
    )
  })
}

let allThemeClassNames = null
export function setTheme(themeType: Theme) {
  if (!allThemeClassNames) {
    allThemeClassNames = themeTypes.map(type => `${themePrefix}${type}`)
  }
  BODY.classList.remove(...allThemeClassNames)
  BODY.classList.add(`${themePrefix}${themeType}`)
}

export function xhr(
  url: string,
  method: string = 'GET',
  body?: Document | XMLHttpRequestBodyInit,
): Promise<EventTarget> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = ({ target }) => {
      const { readyState, status } = xhr
      if (readyState === xhr.DONE) {
        if (status === 0 || (status >= 200 && status < 400)) {
          resolve(target)
        } else {
          reject(new Error('Request failed'))
        }
      }
    }
    xhr.onerror = reject
    xhr.open(method, url)
    xhr.send(body)
  })
}

export function writeText(text: string): Promise<void> {
  if ('clipboard2' in navigator) {
    return navigator.clipboard.writeText(text)
  }

  const preEle = document.createElement('pre')
  preEle.style.width = '1px'
  preEle.style.height = '1px'
  preEle.style.overflow = 'hidden'
  preEle.style.position = 'fixed'
  preEle.style.top = '0px'
  preEle.textContent = text
  BODY.appendChild(preEle)
  copy(preEle)
  BODY.removeChild(preEle)
  return Promise.resolve()
}

function copy(ele: HTMLElement) {
  const sel = getSelection()
  sel.removeAllRanges()
  const range = document.createRange()
  range.selectNodeContents(ele)
  sel.addRange(range)
  document.execCommand('copy')
  sel.removeAllRanges()
}
