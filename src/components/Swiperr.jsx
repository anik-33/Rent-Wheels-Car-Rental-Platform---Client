import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Typewriter } from 'react-simple-typewriter'

const Swiperr = () => {
    return (
       <div className="w-full h-[48vh] md:h-[60vh] lg:h-[70vh]">
        
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,       // Time between slides in ms
          disableOnInteraction: false, // Keeps autoplay even after user interacts
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-full h-full"
      >
        <SwiperSlide className="relative w-full h-full">
          <img src="https://i.ibb.co.com/r2C583bg/2024-Tesla-Model-3-EV-1.jpg"alt="Plant 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold  bg-opacity-50 px-4 py-2 rounded-lg">
              
              Tesla Model 3
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <img src="https://i.ibb.co.com/5hwCsRmj/2015-Ford-Mustang-GT-For-Sale-At-Auction-Mecum-Auctions.jpg" alt="Plant 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold  bg-opacity-50 px-4 py-2 rounded-lg">
              Ford-Mustang-GT
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <img src="https://i.ibb.co.com/hx5qZ513/Honda-Civic-RS-Prototype-Debuts-In-Tokyo-With-Sharper-Looks-And-A-Manual-Gearbox-Carscoops.jpg" alt="Plant 3" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
           Honda Civic RS
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <img src="https://i.ibb.co.com/4wsSCFCk/Mercedes-Benz-AMG-C-Class-Coupe.jpg" alt="Plant 4" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold  bg-opacity-50 px-4 py-2 rounded-lg">
             Mercedes-Benz-AMG 
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Swiperr;