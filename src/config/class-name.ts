const PREFIX = 'md-reader__'
const p = ([block]: TemplateStringsArray) => PREFIX + block

export default {
  PREFIX,
  BODY: p`body`,
  SIDE: p`side`,
  SIDE_NAV: p`side-nav`,
  SIDE_SPLITTER: p`side-splitter`,
  SIDE_ACTIVE: p`side-li--active`,
  CONTENT: p`markdown-content`,
  BUTTON: p`btn`,
  HEAD_ANCHOR: p`head-anchor`,
  BUTTON_WRAP_ELE: p`button-wrap`,
  CODE_TOGGLE_BTN: p`btn--code-toggle`,
  SIDE_EXPAND_BTN: p`btn--side-expand`,
  GO_TOP_BTN: p`btn--go-top`,
  COPY_BTN: p`btn--copy`,
  SIDE_COLLAPSED: 'side-collapsed',
  SIDE_EXPANDED: 'side-expanded',
  MODAL: p`modal`,
  ZOOM_IMAGE: p`zoom-image`,
  STATIC: p`static`,
}
