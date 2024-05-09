import { IoMdHeart } from "react-icons/io"
import { useAuth } from "../hooks/AuthProvider"
import likeStore from "../hooks/LikeHook"
import { Link } from "react-router-dom"

export default function LikeListItem({ item }) {
  const auth = useAuth()
  const addToLikes = likeStore(state => state.addToLikes)

  const unlike = async () => {
    await addToLikes(auth.token, item.id)
  }

  return (
    <Link to={`products/${item.id}`} className="p-2 flex cursor-pointer">
      <div className="flex items-center w-16 h-16">
        <img src={item.image} className="w-full bg-cover" alt="" />
      </div>
      <div className="ms-2 text-sm text-start">
        <label htmlFor="helper-checkbox-1" className="font-medium h-full flex flex-col justify-evenly text-gray-900 dark:text-gray-300">
          <p className="text-xs font-normal text-gray-900 dark:text-gray-300 text-ellipsis overflow-hidden truncate w-56">{item.title}</p>
          <div>{item.price}</div>
        </label>
      </div>
      <div className="flex items-center">
        <IoMdHeart onClick={unlike} className="w-6 h-6 font-light cursor-pointer text-red-500"/>
      </div>
    </Link>
  )
}