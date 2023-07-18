import MD_PLUGINS from '@/config/md-plugins'
import PAGE_THEMES, { type Theme } from '@/config/page-themes'
import i18n from '@/config/i18n'

export interface Data {
  enable?: boolean
  refresh?: boolean
  language?: string
  centered?: boolean
  mdPlugins?: typeof MD_PLUGINS
  pageTheme?: Theme
  hiddenSide?: boolean
}

export function getDefaultData(mergeData: Data = {}): Data {
  return {
    enable: true,
    refresh: false,
    centered: true,
    hiddenSide: false,
    language: i18n().locale,
    mdPlugins: [...MD_PLUGINS],
    pageTheme: PAGE_THEMES[0],
    ...mergeData,
  }
}
