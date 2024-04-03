import { React } from 'react'
// Import Swiper React components
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SliderByCategoryNavBtn from './SliderByCategoryNavBtn';

export default function SliderByCategories() {

  return (
    <div>
      <div className='mb-8'>
        <p className="text-3xl">Shop by Categories</p>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        // navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className='relative'>
            <img src="https://i.imgur.com/ZANVnHE.jpeg" alt="" />
            <div className='px-4 absolute w-full bottom-4'>
              <p className='text-center bg-white py-2 rounded-md'>Electronics</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src="https://i.imgur.com/QkIa5tT.jpeg" alt="" />
            <div className='px-4 absolute w-full bottom-4'>
              <p className='text-center bg-white py-2 rounded-md'>Casual Wear</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src="https://i.imgur.com/QkIa5tT.jpeg" alt="" />
            <div className='px-4 absolute w-full bottom-4'>
              <p className='text-center bg-white py-2 rounded-md'>Casual Wear</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src="https://i.imgur.com/QkIa5tT.jpeg" alt="" />
            <div className='px-4 absolute w-full bottom-4'>
              <p className='text-center bg-white py-2 rounded-md'>Casual Wear</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src="https://i.imgur.com/QkIa5tT.jpeg" alt="" />
            <div className='px-4 absolute w-full bottom-4'>
              <p className='text-center bg-white py-2 rounded-md'>Casual Wear</p>
            </div>
          </div>
        </SwiperSlide>

        <div className='flex w-full justify-end'>
          <SliderByCategoryNavBtn />
        </div>
      </Swiper>
    </div>
  )
}