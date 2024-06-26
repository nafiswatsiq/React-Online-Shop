import { useEffect, useState } from "react"
import { CiStar } from "react-icons/ci"
import { LuArrowLeftRight } from "react-icons/lu"
import { SlEye } from "react-icons/sl"
import { Link } from "react-router-dom"
import { formatThousands } from "../Utils/NumberUtils"
import { CiHeart } from "react-icons/ci"
import likeStore from "../hooks/LikeHook"
import { useAuth } from "../hooks/AuthProvider"
import { IoMdHeart } from "react-icons/io"

export default function ListBestSellerItem(props) {
  const auth = useAuth()
  const checkLike = likeStore(state => state.checkLike)
  const addToLikes = likeStore(state => state.addToLikes)
  const [like, setLike] = useState(false)
  const [hover, setHover] = useState(false)

  useEffect(() => {
   const check = checkLike(props.product.id)
    setLike(check)
  }, [checkLike])

  const likeProduct = async() => {
    addToLikes(auth.token, props.product.id)
    setLike(!like)
  }

  return (
    <div onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)} className="">
        <div className="relative">
          <img src={props.product.images[0]} alt="" loading="lazy"/>

          {hover && <div className="absolute w-full h-full bg-[#ffffff62] top-0 p-4">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col items-end gap-y-3">
                {like && <span className="p-1 bg-white rounded-full cursor-pointer">
                  <IoMdHeart onClick={likeProduct} className="w-5 h-5 text-red-500"/>
                </span>
                }
                {!like && <span className="p-1 bg-white rounded-full cursor-pointer">
                  <CiHeart onClick={likeProduct} className="w-5 h-5"/>
                </span>
                }
                <span className="p-1.5 bg-white rounded-full">
                  <LuArrowLeftRight className="w-4 h-4"/>
                </span>
                <Link to={'/products/' + props.product.id} className="p-1.5 bg-white rounded-full">
                  <SlEye className="w-4 h-4"/>
                </Link>
              </div>
              <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm w-full font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ">
                Add to Chart
              </button>
            </div>
          </div>
          }
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <Link to={'/products/' + props.product.id}>
            <p className="font-bold">{props.product.title}</p>
          </Link>
          <p>{props.product.category['name']}</p>
          <p className="text-lg">Rp. {formatThousands(props.product.price)} <span className="ml-2 text-gray-400 line-through text-base">Rp.{formatThousands(props.product.price + 6000)}</span></p>
        </div>
      </div>
  )
}