import { CiTrash } from "react-icons/ci"
import { useState } from "react";
import cartStore from "../hooks/CartStore";
import { useAuth } from "../hooks/AuthProvider"
import { formatThousands } from "../Utils/NumberUtils"

export default function MiniCartItem({ item }) {
  const auth = useAuth()
  const [openTrash, setOpenTrash] = useState(false)
  const deleteCart  = cartStore(state => state.deleteCart)

  const deleteItem = () => {
    deleteCart(item.id, auth.token)
  }

  return (
    <div onMouseEnter={() => setOpenTrash(true)} onMouseLeave={() => setOpenTrash(false)} className="flex rounded hover:bg-gray-100 relative max-w-xs w-80 overflow-hidden">
      <div className="p-2 flex">
        <div className="flex items-center w-16 h-16">
          <img src={item.product.images} className="w-full bg-cover" alt="" />
        </div>
        <div className="ms-2 text-sm text-start">
          <label htmlFor="helper-checkbox-1" className="font-medium h-full flex flex-col justify-between text-gray-900 dark:text-gray-300">
            <p className="text-xs font-normal text-gray-900 dark:text-gray-300 text-ellipsis overflow-hidden truncate w-56">{item.product.title}</p>
            <div>{item.quantity} x Rp. {formatThousands(item.price)}</div>
            {item.size && (
              <p className="text-xs font-normal text-gray-500 dark:text-gray-300">Size: {item.size}</p>
            )}
          </label>
        </div>
      </div>
      <div onClick={deleteItem} className={openTrash == true ? "w-12 flex items-center justify-center bg-black transition-all duration-300 absolute right-0 h-full" : "w-0 flex items-center justify-center bg-black transition-all duration-300 absolute right-0 h-full"}>
        <CiTrash className="w-6 h-6 text-white"/>
      </div>
    </div>
  )
}