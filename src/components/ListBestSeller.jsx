import { useEffect, useState } from "react";
import ListBestSellerItem from "./ListBestSellerItem";
import Skeleton from "./Skeleton";

export default function ListBestSeller({products}) {
  const [loading, setLoading] = useState(true)
  const [ dProducts, setProducts ] = useState([])

  // setTimeout(() => {
  //   setLoading(false)
  //   setProducts(props.products)
  // }, 3000)
  useEffect(() => {
    if(products.length > 0) {
      setLoading(false)
      setProducts(products)
    }
  }, [products])
  
  return (
    <>
      <div className="mt-16">
        {loading && (
          <Skeleton length={12} cols={4}/>
        )}
      </div>
      <div className="grid grid-cols-4 gap-8 my-16">
        {dProducts.map((product) => (
          <ListBestSellerItem key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}