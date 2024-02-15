import storage from '@/core/storage'
import { toTheme } from '@/shared/index'

export default {
  async toggleSide(handler) {
    await toggle(handler, 'hiddenSide', false)
    await handler('action', { key: 'toggleSide' })
  },
  async toggleCentered(handler) {
    await toggle(handler, 'centered', true)
  },
  async toggleRefresh(handler) {
    await toggle(handler, 'refresh', false)
  },
  async toggleTheme(handler) {
    let { pageTheme = 'light' } = await storage.get('pageTheme')
    pageTheme = toTheme(pageTheme)
    const value = pageTheme === 'light' ? 'dark' : 'light'
    handler('storage', { key: 'pageTheme', value })
  },
}

async function toggle(handler, key, defaultValue) {
  const data = await storage.get(key)
  const value = data[key] === undefined ? defaultValue : data[key]
  handler('storage', { key, value: !value })
}
