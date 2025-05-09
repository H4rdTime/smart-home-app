"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MainSlider() {
  return (
    <div className="w-screen max-w-none relative left-1/2 right-1/2 -mx-[50vw]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-[60vh] min-h-[320px] max-h-[700px]"
      >
        <SwiperSlide>
          <img src="/camera.png" alt="Слайд 1" className="w-full h-full object-contain bg-white mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/camera.png" alt="Слайд 2" className="w-full h-[300px] md:h-[400px] object-contain bg-white mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/camera.png" alt="Слайд 3" className="w-full h-[300px] md:h-[400px] object-contain bg-white mx-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
} 