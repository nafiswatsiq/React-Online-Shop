import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export default function SliderByCategoryNavBtn() {
  const swiper = useSwiper();

  return (
    <div className='mt-4 flex gap-x-4'>
        <button onClick={() => swiper.slidePrev()} className='px-4 py-4 bg-black rounded-lg border text-white border-black hover:text-black hover:bg-white transition-all duration-150'>
          <BsArrowLeft/>
        </button>
        
        <button onClick={() => swiper.slideNext()} className='px-4 py-4 bg-black rounded-lg border text-white border-black hover:text-black hover:bg-white transition-all duration-150'>
          <BsArrowRight/>
        </button>
    </div>
  );
}