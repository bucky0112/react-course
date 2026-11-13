import { create } from 'zustand'

export const useCartStore = create((set) => ({
  items: [],
  add: (product) =>
    set((state) => {
      const found = state.items.find((i) => i.id === product.id)

      if (found) {
        return {
          items: state.items.map((i) =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          )
        }
      }
      return { items: [...state.items, { ...product, qty: 1 }] }
    })
}))
