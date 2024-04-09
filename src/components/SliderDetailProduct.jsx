import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SliderDetailProduct(props) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <div className='relative detail-product'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {props.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {props.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}