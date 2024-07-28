import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <Swiper
        rewind={true}
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="slide1" className='min-h-36'>Slide 1</SwiperSlide>
        <SwiperSlide data-hash="slide2" className='min-h-36'>Slide 2</SwiperSlide>
        <SwiperSlide data-hash="slide3" className='min-h-36'>Slide 3</SwiperSlide>
        <SwiperSlide data-hash="slide4" className='min-h-36'>Slide 4</SwiperSlide>
        <SwiperSlide data-hash="slide5" className='min-h-36'>Slide 5</SwiperSlide>
        <SwiperSlide data-hash="slide6" className='min-h-36'>Slide 6</SwiperSlide>
        <SwiperSlide data-hash="slide7" className='min-h-36'>Slide 7</SwiperSlide>
        <SwiperSlide data-hash="slide8" className='min-h-36'>Slide 8</SwiperSlide>
        <SwiperSlide data-hash="slide9" className='min-h-36'>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}