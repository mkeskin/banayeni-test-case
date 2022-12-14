import type { Item } from 'types/item'

import create from 'zustand'
// import { persist } from 'zustand/middleware'
import { item as itemService } from '@utils/fetch'

export interface ItemStore {
  items: Item[]
  item?: Item
  getItems: () => Item[]
  getItem: (id: number) => Promise<Item>
}

const useStore = create<ItemStore>((set, _) => ({
  items: [],
  item: undefined,
  getItems: () => {
    throw new Error('This method has not yet been implemented.')
  },
  getItem: async (id: number) => {
    const data = await itemService.get<any, Item>(`/api/Item/${id}`)
    set(() => ({ item: data }))
    return data
  },
}))

export default useStore
