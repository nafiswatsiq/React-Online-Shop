import { useState } from "react"
import paymentHook from "../hooks/PaymentHook"

export default function StepPayment() {
  const setPayment = paymentHook(state => state.setPayment)

  const [input, setInput] = useState({
    cardNumber: "",
    cardName: "",
    expiredDate: "",
    cvv: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  setPayment(input)

  return (
    <div>
      <h1 className="font-bold text-xl">Debit/Credit card</h1>
      <div className="my-6 grid grid-cols-1 gap-5">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Number</label>
          <input onChange={handleInput} type="tel" name='cardNumber' id="name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="XXXX XXXX XXXX XXXX" required  min={16} max={16}/>
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Name</label>
          <input onChange={handleInput} type="text" name='cardName' id="name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="card name" required />
        </div>
        <div className="grid grid-cols-2 gap-x-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expiry Date</label>
            <input onChange={handleInput} type="month" name='expiredDate' id="name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="" required />
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CVV</label>
            <input onChange={handleInput} type="text" name='cvv' id="name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="" required />
          </div>
        </div>
      </div>
    </div>
  )
}