import BreadcrumbMenu from "../components/BreadrumbMenu";
import SliderDetailProduct from "../components/SliderDetailProduct";
import { FaStar } from "react-icons/fa"
import { CiHeart } from "react-icons/ci"
import ListBestSeller from "../components/ListBestSeller";
import { useEffect, useState } from "react";
import { getDetailProduct, getProductsDetailPage } from "../api/DetailProduct";
import { useParams } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import cartStore from "../hooks/CartStore";
import { useAuth } from "../hooks/AuthProvider";
import { formatThousands } from "../Utils/NumberUtils"
import { toast } from "react-toastify";
import { IoMdHeart } from "react-icons/io"
import likeStore from "../hooks/LikeHook"
import { motion } from "framer-motion"

export default function DetailProduct() {
  const auth = useAuth()
  const param = useParams()
  const [detailProduct, setDetailProduct] = useState([])
  const [products, setProducts] = useState([])
  const [selectedSize, setSize] = useState()
  const [selectedQuantity, setQuantity] = useState(1)
  const [onAddToCart, setOnAddToCart] = useState(false)
  const setToCart  = cartStore(state => state.addToCart)
  const addToLikes = likeStore(state => state.addToLikes)
  const checkLike = likeStore(state => state.checkLike)
  const fetchLikes = likeStore(state => state.fetchLikes)
  const [like, setLike] = useState(false)

  useEffect(() => {
    fetchLikes(auth.token)

    getDetailProduct(param.id).then((response) => {
      setDetailProduct(response)
    })

    getProductsDetailPage().then((response) => {
      setProducts(response)
    })

    const liked = checkLike(param.id)
    setLike(liked)
  }, [param, fetchLikes])
  
  let getSizes
  if (detailProduct.additional) {
    getSizes = detailProduct.additional.split(',')
  }

  const addToCart = () => {
    return async () => {
      setOnAddToCart(true)

      const postdata = await setToCart(
        {
        product_id: detailProduct.id,
        quantity: selectedQuantity,
        price: detailProduct.price,
        size: selectedSize
        },
        auth.token
      )

      if (postdata.status == 200) {

        setOnAddToCart(false)
        toast.success('Product added to cart')
      } else if (postdata.status == 401) {

        auth.logOut()
      }
    }
  }

  const handleLike = () => {
    addToLikes(auth.token, detailProduct.id)
    setLike(!like)
  }

  const breadcrumb = [
    {
      name: 'Products',
      url: '/products'
    },
    {
      name: detailProduct.title,
      url: '/products/1'
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
          <div className="flex">
            <div className="w-5/12">
              <SliderDetailProduct images={detailProduct.images}/>
            </div>
            <div className="w-7/12">
              <div className="px-16">
                <p className="font-bold text-3xl">{detailProduct.title}</p>
                <p className="text-base mt-4">{detailProduct.category?.name}</p>
                <div className="mt-4 flex gap-x-1">
                  <FaStar className="text-yellow-400 text-lg"/>
                  <FaStar className="text-yellow-400 text-lg"/>
                  <FaStar className="text-yellow-400 text-lg"/>
                </div>

                <p className="text-lg mt-4">Rp. {formatThousands(detailProduct.price + 0)} <span className="ml-2 text-gray-400 line-through text-base">Rp. {formatThousands(detailProduct.price + 6000)}</span></p>
                <p className="mt-4">{detailProduct.description}</p>

                {detailProduct.additional && (
                  <div className="mt-4">
                    <p className="text-base font-semibold">Size</p>
                    <div className="grid grid-cols-9 gap-2 mt-2">
                      {getSizes.map((size, index) => (
                        <button onClick={() => setSize(size)} key={index} className={`border border-gray-400 px-4 py-2 rounded-lg ${size == selectedSize ? 'bg-black text-white' : ''}`}>
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-10 flex gap-x-6 justify-between">
                  <div className="max-w-xs">
                    <div className="relative flex items-center max-w-[8rem]">
                      <button onClick={
                        () => setQuantity(selectedQuantity > 1 ? selectedQuantity - 1 : 1)
                        } type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 border-r-0 rounded-s-lg p-3 h-11 focus:ring-transparent dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900   " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                        </svg>
                      </button>
                      <input type="text" value={selectedQuantity} id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-white border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-transparent focus:border-gray-300 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={999} required />
                      <button
                      onClick={() => setQuantity(selectedQuantity + 1)
                      } type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 border-l-0 rounded-e-lg p-3 h-11 focus:ring-transparent dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900   " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <button onClick={addToCart()} type="button" disabled={onAddToCart} className={`text-white items-center w-full bg-black font-normal border border-black hover:text-black hover:bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 ${onAddToCart ? 'cursor-not-allowed' : ''}`}>
                      Add to Cart
                    </button>
                  </div>

                  <motion.div
                    className="border border-black !rounded-lg flex px-2 items-center"
                    whileHover={{ scale: 1.2, rotate: 0 }}
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                  >
                    {!like && <CiHeart onClick={handleLike} className="text-3xl cursor-pointer"/>}
                    {like && <IoMdHeart onClick={handleLike} className="text-3xl text-red-500 cursor-pointer"/>}
                  </motion.div>
                </div>

              </div>
            </div>
          </div>

          <div className="mt-16">
            <p className="font-semibold text-xl">Related Products</p>

            <div className="">
              <ListBestSeller products={products}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}