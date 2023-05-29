const PREFIX = 'md-reader__'
const p = ([block]: TemplateStringsArray) => PREFIX + block

export default {
  PREFIX,
  MD_BODY: p`body`,
  MD_SIDE: p`side`,
  MD_SIDE_ACTIVE: p`side-li--active`,
  MD_CONTENT: p`markdown-content`,
  MD_TIPS: p`markdown-tips`,
  MD_BUTTON: p`btn`,
  HEAD_ANCHOR: p`head-anchor`,
  BUTTON_WRAP_ELE: p`button-wrap`,
  CODE_TOGGLE_BTN: p`btn--code-toggle`,
  SIDE_EXPAND_BTN: p`btn--side-expand`,
  GO_TOP_BTN: p`btn--go-top`,
  COPY_BTN: p`btn--copy`,
  SIDE_COLLAPSED: 'side-collapsed',
  SIDE_EXPANDED: 'side-expanded',
  SIDE_FOLDER_CONTENT: 'side-folder-content',
  SIDE_FOLDER_EXPANDED: 'side-folder-expanded',
  MODAL: p`modal`,
  ZOOM_IMAGE: p`zoom-image`,
}
