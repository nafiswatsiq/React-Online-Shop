import { Dropdown } from "flowbite-react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useAuth } from "../hooks/AuthProvider";
import { PiSignOutLight } from "react-icons/pi"

export default function DropdownProfile() {
  const auth = useAuth()

  return (
    <Dropdown label="" dismissOnClick={false} renderTrigger={() => 
      <span className="flex items-center cursor-pointer">
        <span>Hi {auth.user.name}!</span>
        <img src={auth.user.profile} className="w-9 h-9 ms-3 rounded-full border-2 border-gray-500" alt="" />
      </span>}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => auth.logOut() } icon={PiSignOutLight}>Sign out</Dropdown.Item>
    </Dropdown>
  )
}