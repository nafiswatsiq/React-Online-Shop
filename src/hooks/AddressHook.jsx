import { create } from "zustand";
import { deleteAddress, getListAddress, postAddress } from "../api/Address";

const addressHook = create(set => ({
  address: [],
  idAddress: null,
  fetchAddress: async (token) => {
    try {
      const addressData = await getListAddress(token)

      set({ address: addressData.data })

    } catch (error) {
      console.error('Error fetching address data:', error)
    }
  },
  addAddress: async (token, data) => {
    try {
      await postAddress(token, data)

      const updatedAddress = await getListAddress(token)

      set({ address: updatedAddress.data })

      return {
        error : false,
        status: 200
      }
    } catch (error) {
      return {
        error: true,
        status: error.response.status
      }
    }
  },
  deleteAddress: async (token, id) => {
    try {
      await deleteAddress(token, id)

      const updatedAddress = await getListAddress(token)

      set({ address: updatedAddress.data })

      return {
        error : false,
        status: 200
      }
    } catch (error) {
      return {
        error: true,
        status: error.response.status
      }
    }
  },
  setIdAddress: (id) => set({ idAddress: id })
}))

export default addressHook