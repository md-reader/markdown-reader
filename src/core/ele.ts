export type ElementType = HTMLElement | SVGSVGElement | DocumentFragment
export type Attrs =
  | Record<string, string>
  | {
      className?: string | string[]
      style?: string | string[] | Partial<CSSStyleDeclaration>
    }
type RestEleParams = ConstructorParameters<typeof Ele> extends [
  first: unknown,
  ...rest: infer U,
]
  ? U
  : never

const FRAGMENT_TAGNAME = '#document-fragment'

export default class Ele<T extends ElementType = ElementType> {
  ele: T
  protected display: string

  static create<T extends ElementType>(tagName: string, attrs: Attrs = {}): T {
    const { className, ...restAttrs } = attrs
    let ele: T

    if (tagName === 'svg') {
      ;(ele as SVGSVGElement) = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg',
      )
    } else if (tagName === FRAGMENT_TAGNAME) {
      ;(ele as DocumentFragment) = document.createDocumentFragment()
    } else {
      ;(ele as HTMLElement) = document.createElement(tagName)
    }
    if (!isFragment(ele)) {
      Ele.addClassName(ele, className)
      for (const key in restAttrs) {
        ele.setAttribute(key, restAttrs[key])
      }
    }
    return ele
  }

  static addClassName(
    ele: HTMLElement | SVGSVGElement,
    classList: string | string[],
  ) {
    if (!classList) return
    if (typeof classList === 'string') {
      classList = classList.split(' ')
    }
    ele.classList.add(...classList.filter(Boolean))
  }

  static from(node: ElementType | Ele): ElementType {
    return node instanceof Ele ? node.ele : node
  }

  constructor(
    tagName: string | T,
    attrs?: Attrs,
    children?: Ele | ElementType | (Ele | ElementType)[],
  ) {
    if (typeof tagName !== 'string') {
      this.ele = tagName
    } else {
      this.ele = Ele.create<T>(tagName, attrs)
    }
    children && this.append(children as Ele)
  }

  get classList(): DOMTokenList {
    return isFragment(this.ele) ? null : this.ele.classList
  }
  get style(): CSSStyleDeclaration {
    return isFragment(this.ele) ? null : this.ele.style
  }
  get src(): string {
    return isImg(this.ele) ? this.ele.src : undefined
  }
  set src(src) {
    if (isImg(this.ele)) {
      this.ele.src = src
    }
  }
  set innerHTML(content: string) {
    if (!isFragment(this.ele)) {
      this.ele.innerHTML = content
    }
  }
  set textContent(content: string) {
    this.ele.textContent = content
  }

  query(selectors: string): Element | null {
    return this.ele.querySelector(selectors)
  }
  queryAll(selectors: string): HTMLElement[] {
    return Array.from(this.ele.querySelectorAll(selectors))
  }
  remove() {
    this.ele.parentNode && this.ele.parentNode.removeChild(this.ele)
  }
  toggle(): void
  toggle(status: boolean): void
  toggle(status?: boolean | undefined): void {
    if (!isFragment(this.ele)) {
      if (typeof status === 'boolean') {
        status ? this.show() : this.hide()
      } else {
        this.style.display === 'none' ? this.show() : this.hide()
      }
    }
  }
  show() {
    if (!isFragment(this.ele)) {
      if (this.style.display === 'none') {
        this.style.display = this.display || ''
      }
    }
  }
  hide() {
    if (!isFragment(this.ele) && this.style.display !== 'none') {
      this.display = this.style.display
      this.style.display = 'none'
    }
  }
  setStyle(style: Partial<CSSStyleDeclaration>): CSSStyleDeclaration {
    Object.assign(this.style, style)
    return this.style
  }
  append(newChild: ElementType | Ele): ElementType
  append(newChild: (ElementType | Ele)[]): ElementType[]
  append(newChild: (ElementType | Ele)[] | ElementType | Ele) {
    return Array.isArray(newChild)
      ? newChild.map(child => this.append(child))
      : this.ele.appendChild(Ele.from(newChild))
  }
  insertBefore(
    newChild: ElementType | Ele,
    refChild: ElementType | Ele,
  ): ElementType {
    return this.ele.insertBefore(Ele.from(newChild), Ele.from(refChild))
  }
  on(
    eventType: keyof HTMLElementEventMap,
    listener: EventListenerOrEventListenerObject,
    options?: AddEventListenerOptions | boolean,
  ): void {
    this.ele.addEventListener(eventType, listener, options)
  }
  once(
    eventType: keyof HTMLElementEventMap,
    listener: EventListenerOrEventListenerObject,
    options?: AddEventListenerOptions | boolean,
  ): void {
    const defaultOptions: AddEventListenerOptions = { once: true }
    if (typeof options === 'boolean') {
      defaultOptions.capture = options
    } else {
      options = Object.assign(options || {}, defaultOptions)
    }
    const ele = this.ele
    ele.addEventListener(
      eventType,
      function handler(e: Event) {
        if (typeof listener === 'object') {
          listener.handleEvent.call(this, e)
        } else {
          listener.call(this, e)
        }
        ele.removeEventListener(eventType, handler)
      },
      options,
    )
  }
  off(
    eventType: keyof HTMLElementEventMap,
    listener: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean,
  ): void {
    this.ele.removeEventListener(eventType, listener, options)
  }

  static a = (...p: RestEleParams) => new Ele<HTMLElement>('a', ...p)
  static p = (...p: RestEleParams) => new Ele<HTMLElement>('p', ...p)
  static ul = (...p: RestEleParams) => new Ele<HTMLElement>('ul', ...p)
  static li = (...p: RestEleParams) => new Ele<HTMLElement>('li', ...p)
  static div = (...p: RestEleParams) => new Ele<HTMLElement>('div', ...p)
  static span = (...p: RestEleParams) => new Ele<HTMLElement>('span', ...p)
  static main = (...p: RestEleParams) => new Ele<HTMLElement>('main', ...p)
  static aside = (...p: RestEleParams) => new Ele<HTMLElement>('aside', ...p)
  static article = (...p: RestEleParams) =>
    new Ele<HTMLElement>('article', ...p)
  static button = (...p: RestEleParams) => new Ele<HTMLElement>('button', ...p)
  static img = (...p: RestEleParams) => new Ele<HTMLImageElement>('img', ...p)
  static svg = (...p: RestEleParams) => new Ele<SVGSVGElement>('svg', ...p)
  static fragment = (...p: RestEleParams) =>
    new Ele<DocumentFragment>(FRAGMENT_TAGNAME, ...p)
}

function isFragment(element: ElementType | Ele): element is DocumentFragment {
  return element instanceof DocumentFragment
}

function isImg(element: ElementType | Ele): element is HTMLImageElement {
  return element instanceof HTMLImageElement
}

export type Svg = {
  attributes: { [key: string]: string }
  content: string
}

export function svg(options: Svg, attrs: Attrs = {}): Ele<SVGSVGElement> {
  const svgEle = new Ele<SVGSVGElement>('svg', {
    ...options.attributes,
    ...attrs,
  })
  svgEle.innerHTML = options.content
  return svgEle
}
