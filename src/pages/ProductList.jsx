import { useEffect, useState } from "react";
import ListBestSeller from "../components/ListBestSeller";
import ScrollToTop from "../components/ScrollToTop";
import { getProductList } from "../api/ProductList";
import { IoIosArrowDown } from "react-icons/io"
import BreadcrumbMenu from "../components/BreadrumbMenu";
import { useLocation, useParams } from "react-router-dom";
import Skeleton from "../components/Skeleton";

export default function ProductList() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const category = searchParams.get('category')
  const [loading, setLoading] = useState(false)
  
  const [products, setProducts] = useState([]);

  const perPage = 8;

  useEffect(() => {
    getProductList(perPage, 0, category ?? '').then((response) => {
      setProducts(response);
    });
  }, []);

  const loadMore = async() => {
    setLoading(true)
    const res = await getProductList(perPage, products.length, category ?? '');

    setProducts([...products, ...res]);
    setLoading(false)
  }

  const breadcrumb = [
    {
      name: 'Products',
      url: '/products'
    }
  ]

  return (
    <>
    <ScrollToTop />
    <div className="mt-16">

      <div className="max-w-[70rem] mx-auto">
        <BreadcrumbMenu breadcrumb={breadcrumb}/>
      </div>

      <div className="max-w-[70rem] mx-auto py-10">
        <p className="text-3xl text-center">Our Products</p>
        <ListBestSeller products={products}/>

        {loading && 
          <Skeleton length={8} cols={4}/>
        }

        <p onClick={loadMore} className="text-center flex justify-center items-center cursor-pointer">Load More <IoIosArrowDown className="ml-3"/></p>
      </div>
    </div>
    </>
  )
}