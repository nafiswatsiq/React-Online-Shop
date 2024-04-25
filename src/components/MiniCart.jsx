import { Dropdown } from "flowbite-react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function MiniCart() {
  return (
    <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span><HiOutlineShoppingBag className="w-5 h-5 font-light cursor-pointer"/></span>}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  )
}