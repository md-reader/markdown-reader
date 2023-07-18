import type { Data } from './data'

class Storage<T extends object> {
  local: chrome.storage.LocalStorageArea
  constructor() {
    this.local = chrome.storage.local
  }
  /**
   * Set data to storage
   */
  set(data: T): Promise<T>
  set<K extends keyof T>(key: K, value: T[K]): Promise<T>
  set(data: unknown, value?: unknown) {
    if (typeof data === 'string') {
      return this.setObjData(<T>{
        [data]: value,
      })
    } else {
      return this.setObjData(<T>data)
    }
  }
  protected setObjData(data: T): Promise<T> {
    return new Promise(resolve => {
      this.local.set(data, resolve.bind(null, data))
    })
  }
  /**
   * Get data from storage
   */
  get(): Promise<T>
  get(keys: keyof T): Promise<T>
  get(keys: Array<keyof T>): Promise<T>
  get(keys = null) {
    return new Promise(resolve => this.local.get(keys, resolve))
  }
}

export default new Storage<Data>()
