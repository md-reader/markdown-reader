export type ElementType = HTMLElement | SVGSVGElement | DocumentFragment
export type Attrs = { className?: string | string[] } | { [k: string]: string }
export type EleType = ElementType | Ele | string

export default class Ele<T extends ElementType = ElementType> {
  ele: T
  protected display: string

  static create<T extends ElementType>(tagName: string, attrs: Attrs = {}): T {
    let { className, ...restAttrs } = attrs
    let ele: T

    if (tagName === 'svg') {
      ;(ele as SVGSVGElement) = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg',
      )
    } else if (tagName === '#document-fragment') {
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

  static from(node: string): Text
  static from(node: Omit<EleType, string>): ElementType
  static from(node: EleType) {
    return node instanceof Ele
      ? node.ele
      : typeof node === 'string'
      ? document.createTextNode(node)
      : node
  }

  constructor(element: T, attrs?: Attrs, children?: EleType | EleType[])
  constructor(tagName: string, attrs?: Attrs, children?: EleType | EleType[])
  constructor(tagName: string | T, attrs?: Attrs, children?: any) {
    if (typeof tagName !== 'string') {
      this.ele = tagName
    } else {
      this.ele = Ele.create<T>(tagName, attrs)
    }
    children && this.append(children)
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
    if (this instanceof Text) {
      return
    }
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
  append(newChild: string | string[]): Text | Text[]
  append(newChild: EleType | EleType[]): ElementType | ElementType[]
  append(newChild: any): any {
    return Array.isArray(newChild)
      ? newChild.map(child => this.append(child))
      : this.ele.appendChild(Ele.from(newChild))
  }
  insertBefore(newChild: EleType, refChild: EleType): ElementType | Text {
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
}

function isFragment(element: EleType): element is DocumentFragment {
  return element instanceof DocumentFragment
}

function isImg(element: EleType): element is HTMLImageElement {
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
