import { Dropdown } from "flowbite-react"
import { CiHeart } from "react-icons/ci"
import LikeListItem from "./LikeListItem"
import likeStore from "../hooks/LikeHook"
import { useEffect } from "react"
import { useAuth } from "../hooks/AuthProvider"

export default function LikesList() {
  const auth = useAuth()
  const likes = likeStore(state => state.likes)
  const fetchLikes = likeStore(state => state.fetchLikes)

  useEffect(() => {
    if (auth.token){
      fetchLikes(auth.token)
    }
  }, [fetchLikes])

  return (
    <Dropdown className="max-h-[450px] overflow-y-scroll" label="" dismissOnClick={false} renderTrigger={() => <span><CiHeart className="w-6 h-6 font-light cursor-pointer"/></span>}>
      {likes.length == 0 ?
        <Dropdown.Item className="max-w-xs w-80 overflow-hidden">Likes is empty</Dropdown.Item> : ''
      }
      {likes.map((item, index) => (
        <Dropdown.Item className="p-0" key={index}>
          <LikeListItem item={item}/>
        </Dropdown.Item>
      ))}
    </Dropdown>
  )
}