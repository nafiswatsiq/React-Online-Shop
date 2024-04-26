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
      if (error.response.status === 401) {
        
      }
    }
  },
  addToCart: async (item, token) => {
    try {
      // Menambahkan item ke cart di API
      await postCart(item, token)

      // Mengambil data cart yang baru dari API
      const updatedCart = await getCart(token)

      // Mengupdate state cart di store
      set({ cart: updatedCart.cart })

      return {
        error : false,
        status: 200
      }
    } catch (error) {
      return {
        error: true,
        status: error.response.status
      }
      // console.error('Error adding item to cart:', error)
    }
  },
  deleteCart: async (id, token) => {
    try {
      // Menghapus item dari cart di API
      await deleteCart(id, token)

      // Mengambil data cart yang baru dari API
      const updatedCart = await getCart(token)

      // Mengupdate state cart di store
      set({ cart: updatedCart.cart })
    } catch (error) {
      console.error('Error deleting item from cart:', error)
    }
  },
  resetCart: () => set({ cart: [] })
}))

export default cartStore