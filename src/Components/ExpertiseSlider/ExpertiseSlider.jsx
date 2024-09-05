import HTML from '../../assets/img/Skills/HTML.svg'
import CSS from '../../assets/img/Skills/CSS.svg'
import Tailwind from '../../assets/img/Skills/Tailwind.svg'
import JavaScript from '../../assets/img/Skills/JavaScript.svg'
import Firebase from '../../assets/img/Skills/Firebase.svg'
import React from '../../assets/img/Skills/React.svg'
import NodeJS from '../../assets/img/Skills/NodeJS.svg'
import ExpressJS from '../../assets/img/Skills/ExpressJS.svg'
import MongoDB from '../../assets/img/Skills/MongoDB.svg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function ExpertiseSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper flex items-center justify-center"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide><img className='w-60 m-auto' src={HTML} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-60 m-auto' src={CSS} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-60 m-auto' src={Tailwind} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-60 m-auto' src={JavaScript} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-60 m-auto' src={Firebase} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-60 m-auto' src={React} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-60 m-auto' src={NodeJS} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-60 m-auto' src={ExpressJS} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-60 m-auto' src={MongoDB} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}



export default ExpertiseSlider;