import { Dropdown } from "flowbite-react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci"
import { useAuth } from "../hooks/AuthProvider";
import { useState } from "react";
import MiniCartItem from "./MiniCartItem";

export default function MiniCart() {
  const auth = useAuth()

  return (
    <Dropdown placement="bottom" label="" dismissOnClick={false} renderTrigger={() => 
      <span className="relative">
        <div>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
            4
          </span>
        </div>
        <HiOutlineShoppingBag className="w-5 h-5 font-light cursor-pointer"/>
      </span>}>
      <Dropdown.Item className="p-0">
        <MiniCartItem/>
      </Dropdown.Item>
      <Dropdown.Item className="p-0">
        <MiniCartItem/>
      </Dropdown.Item>
      <Dropdown.Item className="p-0">
        <MiniCartItem/>
      </Dropdown.Item>
      <Dropdown.Item className="p-0">
        <MiniCartItem/>
      </Dropdown.Item>
      <Dropdown.Item className="flex flex-col">
        <div className="flex justify-between items-center mb-3 mt-1 w-full">
          <span className="font-bold">Total</span>
          <span>$320.00</span>
        </div>
        <button type="button" className="w-full py-2.5 text-sm font-medium text-white focus:outline-none bg-black rounded-lg hover:bg-gray-900">
          Checkout
        </button>
      </Dropdown.Item>
    </Dropdown>
  )
}