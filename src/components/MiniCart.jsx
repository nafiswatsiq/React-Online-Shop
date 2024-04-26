import { Dropdown } from "flowbite-react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci"
import { useAuth } from "../hooks/AuthProvider";
import { useEffect, useState } from "react";
import MiniCartItem from "./MiniCartItem";
import { getCart } from "../api/Cart";
import cartStore from "../hooks/CartStore";

export default function MiniCart() {
  const auth = useAuth()
  const dataCart = cartStore((state) => state.cart)
  const fetchCart = cartStore(state => state.fetchCart)

  useEffect(() => {
    fetchCart()
  }, [fetchCart])

  return (
    <Dropdown placement="bottom" label="" dismissOnClick={false} renderTrigger={() => 
      <span className="relative">
        <div>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
            {dataCart.length}
          </span>
        </div>
        <HiOutlineShoppingBag className="w-5 h-5 font-light cursor-pointer"/>
      </span>}>
      {dataCart.length == 0 ? 
        <Dropdown.Item className="max-w-xs w-80 overflow-hidden">Cart is empty</Dropdown.Item> : ''
      }
      {dataCart.map((item, index) => (
        <Dropdown.Item className="p-0" key={index}>
          <MiniCartItem item={item}/>
        </Dropdown.Item>
      ))}
      <Dropdown.Item className="flex flex-col">
        <div className="flex justify-between items-center mb-3 mt-1 w-full">
          <span className="font-bold">Total</span>
          <span>${dataCart.reduce((total, item) => total + item.price * item.quantity, 0)}.00</span>
        </div>
        <button type="button" className="w-full py-2.5 text-sm font-medium text-white focus:outline-none bg-black rounded-lg hover:bg-gray-900">
          Checkout
        </button>
      </Dropdown.Item>
    </Dropdown>
  )
}