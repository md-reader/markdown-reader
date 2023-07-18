import type Event from './event'

type Plugin = (ctx: Ctx) => void
interface Ctx {
  [p: string]: unknown
  event: Event
}

const plugins: Array<Plugin> = []

export function usePlugin(plugin): void
export function usePlugin(plugins: Array<Plugin>): void
export function usePlugin(plugin: Plugin | Array<Plugin>) {
  if (Array.isArray(plugin)) {
    plugin.forEach(p => usePlugin(p))
  } else {
    const index = plugins.indexOf(plugin)
    index < 0 && plugins.push(plugin)
  }
}

export function initPlugins({ event }: { event: Event }) {
  const ctx: Ctx = {
    event,
  }
  plugins.forEach(p => p(ctx))
}
