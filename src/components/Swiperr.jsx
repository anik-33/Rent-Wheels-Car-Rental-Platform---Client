import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swiperr = () => {
    return (
       <div className="w-full h-[80vh] md:h-[80vh] lg:h-[80vh]">
        
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
          <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Land-Rover/Range-Rover-Velar/12767/1758105499465/front-left-side-47.jpg?impolicy=resize&imwidth=420"alt="Plant 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold  bg-opacity-50 px-4 py-2 rounded-lg">
              Zoetis Petcare Products & Solutions
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <img src="https://cdn.pixabay.com/photo/2020/11/09/01/19/car-5725327_1280.jpg" alt="Plant 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold  bg-opacity-50 px-4 py-2 rounded-lg">
              Pioneering pet care solutions with PetTech
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <img src="https://media.istockphoto.com/id/907671144/photo/new-black-metallic-sedan-car-in-spotlight-modern-desing-brandless.jpg?s=612x612&w=0&k=20&c=21WCXCFFvFYtO9-0UiAhNH8xaC8p12IT9_dNHqm9klk=" alt="Plant 3" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
            7 Important Animal Care Tips for Pet Owners 
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <img src="https://thumbs.dreamstime.com/b/modern-car-wash-banner-blue-splashes-clean-vehicle-close-up-being-washed-foam-water-perfect-advertising-auto-402467164.jpg" alt="Plant 4" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold  bg-opacity-50 px-4 py-2 rounded-lg">
              Winter Care Tips 
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Swiperr;