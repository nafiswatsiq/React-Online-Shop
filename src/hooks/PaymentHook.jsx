import { create } from "zustand";

const paymentHook = create(set => ({
  payment: null,
  setPayment: (payment) => set({ payment })
}))

export default paymentHook