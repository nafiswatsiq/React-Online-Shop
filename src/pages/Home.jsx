import { BsArrowRight } from "react-icons/bs"
import MainImg from "../assets/img/main.png"
import SliderByCategories from "../components/SliderByCategories"
import ListBestSeller from "../components/ListBestSeller"
import SeconImgHome from "../assets/img/second-home.jpg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCategory, getProducts } from "../api/Home"
import { motion } from "framer-motion"

export default function Home() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    getCategory().then((response) => {
      setCategories(response)
    })

    getProducts().then((response) => {
      setProducts(response)
    })
  }, [])

  return (
    <div className="mt-16">

      <div className="p-8">
        <div className="bg-[#F3F3F3] h-[80vh]">
          <div className="grid grid-cols-2 items-center h-full pl-20">
            <div className="">
              <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              className="text-2xl">Classic Exclusive</motion.div>
              <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.20,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              className="text-4xl font-extrabold mt-6">Women's Collection</motion.div>
              <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.40,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              className="text-2xl mt-5">UPTO 40% OFF</motion.div>
              <Link to={'/products'}>
                <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0, 0.71, 0.2, 1.01],
                  type: "spring",
                  stiffness: 400, 
                  damping: 10
                }}
                whileHover={{ scale: 1.1 }}
                type="button" className="text-white flex items-center bg-black font-normal border border-black hover:text-black hover:bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-11">
                Shop Now <BsArrowRight className="ml-3"/>
                </motion.button>
              </Link>

            </div>
            <img src={MainImg} alt=""  className=""/>
          </div>
        </div>
      </div>

      <div className="max-w-[70rem] mx-auto py-10">
        <SliderByCategories categories={categories}/>
      </div>

      <div className="max-w-[70rem] mx-auto py-10">
        <p className="text-3xl text-center">Our Bestseller</p>
        <ListBestSeller products={products}/>
        <Link to={'/products'} className="flex items-center justify-center hover:translate-x-2 hover:transition-all hover:duration-200">
          View All Products <BsArrowRight className="ml-3"/>
        </Link>
      </div>

      <div className="py-10 max-w-[75rem] mx-auto">
        <div className="flex">
          <div className="w-8/12">
            <div className="h-full flex items-center">
              <div>
                <p className="text-4xl">Deals of the Month</p>
                <p className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quibusdam sint facere molestias, maiores facilis provident est eos minus unde fugit? Praesentium molestias quae corporis ratione similique quidem minima rem.</p>

                <div className="flex gap-14 mt-8">
                  <div className="text-center">
                    <p className="font-bold text-2xl">120</p>
                    <p>Days</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-2xl">18</p>
                    <p>Hours</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-2xl">15</p>
                    <p>Mins</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-2xl">10</p>
                    <p>Secs</p>
                  </div>
                </div>

                <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                type="button" className="text-white flex items-center bg-black font-normal border border-black hover:text-black hover:bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-8">
                View All Products <BsArrowRight className="ml-3"/>
                </motion.button>
              </div>
            </div>
          </div>

          <div className="w-4/12">
            <img src={SeconImgHome} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}