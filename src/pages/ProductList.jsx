import { useEffect, useState } from "react";
import ListBestSeller from "../components/ListBestSeller";
import ScrollToTop from "../components/ScrollToTop";
import { getProductList } from "../api/ProductList";
import { IoIosArrowDown } from "react-icons/io"

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const perPage = 8;

  useEffect(() => {
    getProductList(perPage, 0).then((response) => {
      setProducts(response);
    });
  }, []);

  const loadMore = async() => {
    const res = await getProductList(perPage, products.length);

    setProducts([...products, ...res]);
  }

  return (
    <>
    <ScrollToTop />
    <div className="mt-16">
      <div className="max-w-[70rem] mx-auto py-10">
        <p className="text-3xl text-center">Our Products</p>
        <ListBestSeller products={products}/>

        <p onClick={loadMore} className="text-center flex justify-center items-center cursor-pointer">Load More <IoIosArrowDown className="ml-3"/></p>
      </div>
    </div>
    </>
  )
}