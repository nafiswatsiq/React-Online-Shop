// import { useState } from "react"
// import { CiStar } from "react-icons/ci"
// import { LuArrowLeftRight } from "react-icons/lu"
// import { SlEye } from "react-icons/sl"

import ListBestSellerItem from "./ListBestSellerItem";

export default function ListBestSeller() {
  const items = [
    { index: 1, text: 'Item 1' },
    { index: 2, text: 'Item 2' },
    { index: 3, text: 'Item 3' },
    { index: 3, text: 'Item 3' },
    { index: 3, text: 'Item 3' },
  ];

  return (
    <div className="grid grid-cols-4 gap-8 my-16">
      {items.map((item) => (
        <ListBestSellerItem key={item.index} index={item.index} product={item.text} />
      ))}
    </div>
  )
}