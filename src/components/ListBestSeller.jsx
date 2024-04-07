// import { useState } from "react"
// import { CiStar } from "react-icons/ci"
// import { LuArrowLeftRight } from "react-icons/lu"
// import { SlEye } from "react-icons/sl"

import ListBestSellerItem from "./ListBestSellerItem";

export default function ListBestSeller(props) {

  return (
    <div className="grid grid-cols-4 gap-8 my-16">
      {props.products.map((product) => (
        <ListBestSellerItem key={product.id} product={product} />
      ))}
    </div>
  )
}