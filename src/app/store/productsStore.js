import { create } from 'zustand'

export const useProductsStore = create((set) => ({
    products: [],
    setProducts: (data) => set({
        products: data
    })
}))