import { React, useEffect, useState } from 'react'
// Import Swiper React components
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SliderByCategoryNavBtn from './SliderByCategoryNavBtn';
import { Link } from 'react-router-dom';
import Skeleton from './Skeleton';

export default function SliderByCategories({categories}) {
  const [ loading, setLoading ] = useState(true)
  const [ dCategories, setCategories ] = useState([])

  useEffect(() => {
    if(categories.length > 0) {
      setLoading(false)
      setCategories(categories)
    }
  }, [categories])

  return (
    <div>
      <div className='mb-8'>
        <p className="text-3xl">Shop by Categories</p>
      </div>
      {loading && 
        <Skeleton length={4} cols={4}/>
      }
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        // navigation
        // onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {dCategories.map((category, index) => (
          <SwiperSlide key={index}>
            <Link to={`/products?category=${category.slug}`} className='relative'>
              <img src={category.image} alt="" loading='lazy'/>
              <div className='px-4 absolute w-full bottom-4'>
                <p className='text-center bg-white py-2 rounded-md'>{category.name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        
        <div className='flex w-full justify-end'>
          <SliderByCategoryNavBtn />
        </div>
      </Swiper>
    </div>
  )
}