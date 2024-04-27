import { CiTrash } from "react-icons/ci"
import { Table } from "flowbite-react"
import { useEffect, useState } from "react";
import cartStore from "../hooks/CartStore";
import { useAuth } from "../hooks/AuthProvider";

export default function CheckoutTableItem({item}) {
  const auth = useAuth()
  const [selectedQuantity, setQuantity] = useState(1)
  const deleteCart  = cartStore(state => state.deleteCart)
  const updateCart = cartStore(state => state.updateCart)

  useEffect(() => {
    setQuantity(item.quantity)
  }, [])

  const incQuantity = () => {
    const qty = selectedQuantity + 1
    setQuantity(qty)
    updateQuantity(qty)
  }

  const decQuantity = () => {
    const qty = selectedQuantity > 1 ? selectedQuantity - 1 : 1
    setQuantity(qty)
    updateQuantity(qty)
  }

  const updateQuantity = (qty) => {
    updateCart(
      item.id,
      {
        quantity: qty
      },
      auth.token
    )
  }

  const deleteCartItem = () => {
    deleteCart(item.id, auth.token)
  }

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <div className="flex gap-x-4">
          <img src={item.product.images} alt="" className="w-20 h-20"/>
          <div className="w-full">
            <p className="max-w-52 truncate">{item.product.title}</p>
            {item.size && 
              <p className="font-normal mt-3">Size: {item.size}</p>
            }
          </div>
        </div>
      </Table.Cell>
      <Table.Cell>${item.price}.00</Table.Cell>
      <Table.Cell>
        <div className="max-w-xs">
          <div className="relative flex items-center max-w-[7rem]">
            <button onClick={decQuantity} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 border-r-0 rounded-s-lg p-3 h-9 focus:ring-transparent dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <svg className="w-3 h-3 text-gray-900   " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <input type="text" value={selectedQuantity} id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-white border-x-0 border-gray-300 h-9 text-center text-gray-900 text-sm focus:ring-transparent focus:border-gray-300 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={999} required />
            <button
            onClick={incQuantity} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 border-l-0 rounded-e-lg p-3 h-9 focus:ring-transparent dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <svg className="w-3 h-3 text-gray-900   " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </div>
      </Table.Cell>
      <Table.Cell>${item.price * selectedQuantity}.00</Table.Cell>
      <Table.Cell>
        <CiTrash onClick={deleteCartItem} className="w-6 h-6 text-red-600 cursor-pointer"/>
      </Table.Cell>
    </Table.Row>
  )
}