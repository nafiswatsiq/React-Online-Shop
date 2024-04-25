import { CiTrash } from "react-icons/ci"
import { useState } from "react";

export default function MiniCartItem({ item }) {
  const [openTrash, setOpenTrash] = useState(false)

  return (
    <div onMouseEnter={() => setOpenTrash(true)} onMouseLeave={() => setOpenTrash(false)} className="flex rounded hover:bg-gray-100 relative">
      <div className="p-2 flex">
        <div className="flex items-center">
          <img src="https://i.imgur.com/cSytoSD.jpeg" className="w-16 h-16" alt="" />
        </div>
        <div className="ms-2 text-sm text-start">
          <label htmlFor="helper-checkbox-1" className="font-medium h-full flex flex-col justify-between text-gray-900 dark:text-gray-300">
            <p className="text-xs font-normal text-gray-900 dark:text-gray-300">Some helpful instruction goes over here.</p>
            <div>1 x $80.00</div>
            <p className="text-xs font-normal text-gray-500 dark:text-gray-300">Size: L</p>
          </label>
        </div>
      </div>
      <div className={openTrash == true ? "w-12 flex items-center justify-center bg-black transition-all duration-300 absolute right-0 h-full" : "w-0 flex items-center justify-center bg-black transition-all duration-300 absolute right-0 h-full"}>
        <CiTrash className="w-6 h-6 text-white"/>
      </div>
    </div>
  )
}