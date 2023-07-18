import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
import mSub from 'markdown-it-sub'
import mSup from 'markdown-it-sup'
import mIns from 'markdown-it-ins'
import mAbbr from 'markdown-it-abbr'
import mMark from 'markdown-it-mark'
import mEmoji from 'markdown-it-emoji'
import mDeflist from 'markdown-it-deflist'
import mFootnote from 'markdown-it-footnote'
import mContainer from 'markdown-it-container'
import mTaskLists from 'markdown-it-task-lists'
import mToc from 'markdown-it-table-of-contents'
import mKatex from '@traptitech/markdown-it-katex'
import mMermaid from '@md-reader/markdown-it-mermaid'
import mMultimdTable from 'markdown-it-multimd-table'
import MD_PLUGINS from '@/config/md-plugins'
import successIcon from '@/images/icon_success.svg'
import copyIcon from '@/images/icon_copy.svg'
import className from '@/config/class-name'
import Ele, { svg } from './ele'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Plugins = { [p: string]: ((a: MdOptions) => any[]) | any[] }
const PLUGINS: Plugins = {
  Emoji: [mEmoji],
  Sub: [mSub],
  Sup: [mSup],
  Ins: [mIns],
  Abbr: [mAbbr],
  Katex: [mKatex],
  Mermaid: ({ theme }) => [
    mMermaid,
    { theme: theme === 'dark' ? 'dark' : 'default', themeVariables: undefined },
  ],
  Mark: [mMark],
  Deflist: [mDeflist],
  Footnote: [mFootnote],
  TaskLists: [mTaskLists],
  TOC: [mToc],
  Warning: [
    mContainer,
    'warning',
    {
      render(tokens, idx) {
        return tokens[idx].nesting === 1
          ? '<blockquote class="warning">\n'
          : '</blockquote>\n'
      },
    },
  ],
  Tips: [
    mContainer,
    'tips',
    {
      render(tokens, idx) {
        return tokens[idx].nesting === 1
          ? '<blockquote class="tip">\n'
          : '</blockquote>\n'
      },
    },
  ],
}

export interface MdOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  config?: MarkdownIt.Options
  plugins?: Array<string>
}

function initRender(options: MdOptions) {
  const { config = {}, plugins = [...MD_PLUGINS] } = options
  const copyButton = new Ele<HTMLElement>(
    'button',
    {
      className: [className.MD_BUTTON, className.COPY_BTN],
      title: 'Expand side',
    },
    [
      svg(copyIcon, { className: 'icon-copy' }),
      svg(successIcon, { className: 'icon-success' }),
    ],
  )

  const md = new MarkdownIt({
    html: true,
    breaks: false,
    linkify: true,
    xhtmlOut: true,
    typographer: true,
    highlight(str: string, language: string) {
      if (language && hljs.getLanguage(language)) {
        try {
          return `<pre class="hljs-pre md-reader__code-block"><code class="hljs" lang="${language}">${
            hljs.highlight(str, { language, ignoreIllegals: true }).value
          }</code>${copyButton.ele.outerHTML}</pre>`
        } catch (err) {
          console.error(err)
          return 'parse error'
        }
      }
      return `<pre class="hljs-pre md-reader__code-block"><code class="hljs">${str}</code>${copyButton.ele.outerHTML}</pre>`
    },
    ...config,
  })

  // parse email
  md.linkify.set({ fuzzyEmail: true })
  // builtin plugins
  md.use(mMultimdTable)

  // custom plugins
  plugins.forEach(name => {
    let plugin = PLUGINS[name]
    if (typeof plugin === 'function') {
      plugin = plugin(options)
    }
    plugin && md.use(plugin[0], ...plugin.slice(1))
  })

  return md
}

interface MdRender {
  (code: string, options: MdOptions): string
  md?: MarkdownIt
}
export const mdRender: MdRender = (code, options): string => {
  if (!mdRender.md || options) {
    mdRender.md = initRender(options)
  }
  return mdRender.md.render(code)
}

export default initRender
