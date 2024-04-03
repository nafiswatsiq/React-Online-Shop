import { useState } from "react"
import { CiStar } from "react-icons/ci"
import { LuArrowLeftRight } from "react-icons/lu"
import { SlEye } from "react-icons/sl"

export default function ListBestSellerItem({ index, product }) {
  const [hover, setHover] = useState(false)

  return (
    <div onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)} className="">
        <div className="relative">
          <img src="https://i.imgur.com/QkIa5tT.jpeg" alt=""/>

          {hover && <div className="absolute w-full h-full bg-[#ffffff62] top-0 p-4">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col items-end gap-y-3">
                <span className="p-1 bg-white rounded-full">
                  <CiStar className="w-5 h-5"/>
                </span>
                <span className="p-1.5 bg-white rounded-full">
                  <LuArrowLeftRight className="w-4 h-4"/>
                </span>
                <span className="p-1.5 bg-white rounded-full">
                  <SlEye className="w-4 h-4"/>
                </span>
              </div>
              <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm w-full font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ">
                Add to Chart
              </button>
            </div>
          </div>
          }
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <p className="font-bold">Roadstar</p>
          <p>Printer Cotton T-shrit</p>
          <p className="text-lg">$38.00 <span className="ml-2 text-gray-400 line-through text-base">$38.00</span></p>
        </div>
      </div>
  )
}