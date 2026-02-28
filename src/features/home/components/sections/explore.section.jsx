import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { ChevronLeft, ChevronRight } from "lucide-react";
import MyCard from "@/core/components/myCard.jsx";
import { destinations } from "@/data/destinations";

export default function ExploreSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full py-16 md:py-24 bg-white select-none">
      <div className="max-w-[2400px] mx-auto px-2">
        {/* Header Section */}
        <div className="mb-14 md:mb-20 px-4 md:px-10">
          <div className="flex items-end justify-between gap-6">
            {/* Left – Title */}
            <div className="flex-1">
              <h1
                className="
        text-[1.32rem] 
        sm:text-2xl 
        md:text-5xl 
        lg:text-6xl 
        xl:text-7xl
        font-black
        md:font-semibold 
        text-black 
        tracking-tight 
        leading-[1.1]
      "
              >
                Dive Into The Beauty Of The World
              </h1>
            </div>

            {/* Right – Navigation */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <button
                ref={prevRef}
                className="
          w-10 h-10 
          sm:w-12 sm:h-12 
          md:w-14 md:h-14
          rounded-full
          border border-gray-200
          flex items-center justify-center
          text-black
          hover:bg-[#3A74FF]
          hover:text-white
          transition-all duration-300
          shadow-sm hover:shadow-md
          disabled:opacity-30
        "
              >
                <ChevronLeft
                  size={20}
                  className="sm:w-6 sm:h-6 md:w-7 md:h-7"
                />
              </button>

              <button
                ref={nextRef}
                className="
          w-10 h-10 
          sm:w-12 sm:h-12 
          md:w-14 md:h-14
          rounded-full
          bg-[#3A74FF]
          flex items-center justify-center
          text-white
          hover:bg-blue-600
          transition-all duration-300
          shadow-md hover:shadow-lg
          disabled:opacity-30
        "
              >
                <ChevronRight
                  size={20}
                  className="sm:w-6 sm:h-6 md:w-7 md:h-7"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group px-4 md:px-10">
          {/* Ethereal Mist Effect - Left */}
          <div
            className="absolute top-0 left-0 z-20 h-full pointer-events-none 
    w-12 md:w-32 lg:w-48 xl:w-64
    bg-gradient-to-r from-white via-white/60 via-white/20 to-transparent 
    backdrop-blur-[1px]"
          />

          {/* Ethereal Mist Effect - Right */}
          <div
            className="absolute top-0 right-0 z-20 h-full pointer-events-none 
    w-12 md:w-32 lg:w-48 xl:w-64
    bg-gradient-to-l from-white via-white/60 via-white/20 to-transparent 
    backdrop-blur-[1px]"
          />

          <Swiper
            modules={[Navigation, Pagination, FreeMode]}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            spaceBetween={20}
            slidesPerView={1.2}
            freeMode={true}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1440: { slidesPerView: 4, spaceBetween: 35 },
            }}
            className="overflow-visible"
          >
            {destinations.map((item) => (
              <SwiperSlide key={item.id} className="pb-4">
                <MyCard
                  title={item.title}
                  location={item.location}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .swiper-pagination-progressbar {
          background: rgba(0, 0, 0, 0.05) !important;
          height: 2px !important;
          bottom: 0 !important;
          top: auto !important;
        }
        .swiper-pagination-progressbar-fill {
          background: #3a74ff !important;
        }
      `}</style>
    </section>
  );
}
