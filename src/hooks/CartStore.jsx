import { create } from "zustand"
import { deleteCart, getCart, postCart } from "../api/Cart"

const cartStore = create(set => ({
  cart: [],
  fetchCart: async (token) => {
    try {
      const cartData = await getCart(token)
      set({ cart: cartData.cart })
    } catch (error) {
      console.error('Error fetching cart data:', error)
    }
  },
  addToCart: async (item) => {
    try {
      // Menambahkan item ke cart di API
      await postCart(item)

      // Mengambil data cart yang baru dari API
      const updatedCart = await getCart()

      // Mengupdate state cart di store
      set({ cart: updatedCart.cart })
    } catch (error) {
      console.error('Error adding item to cart:', error)
    }
  },
  deleteCart: async (id) => {
    try {
      // Menghapus item dari cart di API
      await deleteCart(id)

      // Mengambil data cart yang baru dari API
      const updatedCart = await getCart()

      // Mengupdate state cart di store
      set({ cart: updatedCart.cart })
    } catch (error) {
      console.error('Error deleting item from cart:', error)
    }
  },
  resetCart: () => set({ cart: [] })
}))

export default cartStore