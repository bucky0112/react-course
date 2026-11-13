import { create } from 'zustand'

export const useFavoriteStore = create((set) => ({
  favoriteCount: 0,
  addFavorite: () => set((state) => ({ favoriteCount: state.favoriteCount + 1 }))
}))