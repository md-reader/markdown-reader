type EventListener = (...args: unknown[]) => void

class Event {
  events: Map<string, EventListener[]> = new Map()
  // add event listener
  on(name: string, cb: EventListener) {
    if (!this.events.get(name)) {
      this.events.set(name, [])
    }
    const listeners = this.events.get(name)
    listeners.push(cb)
  }
  // emit event listeners
  emit(name: string, ...args: unknown[]) {
    if (this.events.get(name)) {
      this.events
        .get(name)
        .forEach(listener => listener && listener.apply(this, args))
    }
  }
  // remove event listener
  off(name: string, cb: EventListener) {
    if (!this.events.get(name)) {
      this.events.set(name, [])
    }
    const listeners = this.events.get(name)
    const index = listeners.indexOf(cb)
    index >= 0 && listeners.splice(index, 1)
  }
  // add event listener once
  once(name: string, cb: EventListener) {
    const _cb = (...args: unknown[]) => {
      cb.apply(this, args)
      this.off(name, _cb)
    }
    this.on(name, _cb)
  }
  // clear all event listeners
  clear(name: string) {
    this.events.delete(name)
  }
}

export default Event
