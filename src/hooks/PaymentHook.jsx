import { create } from "zustand";

const paymentHook = create(set => ({
  payment: [],
  setPayment: (payment) => set({ payment })
}))

export default paymentHook