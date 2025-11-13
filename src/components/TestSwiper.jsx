import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const slides = [
  {
    img: "https://i.ibb.co.com/r2C583bg/2024-Tesla-Model-3-EV-1.jpg",
    title: "Tesla Model 3",
    subtitle: "Premium Electric Performance",
  },
  {
    img: "https://i.ibb.co.com/5hwCsRmj/2015-Ford-Mustang-GT-For-Sale-At-Auction-Mecum-Auctions.jpg",
    title: "Ford Mustang GT",
    subtitle: "Unleash The Power Within",
  },
  {
    img: "https://i.ibb.co.com/hx5qZ513/Honda-Civic-RS-Prototype-Debuts-In-Tokyo-With-Sharper-Looks-And-A-Manual-Gearbox-Carscoops.jpg",
    title: "Honda Civic RS",
    subtitle: "Sharp. Sporty. Sensational.",
  },
  {
    img: "https://i.ibb.co.com/4wsSCFCk/Mercedes-Benz-AMG-C-Class-Coupe.jpg",
    title: "Mercedes-Benz AMG",
    subtitle: "Luxury Meets Performance",
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full h-[50vh] md:h-[65vh] lg:h-[80vh] relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Image with zoom animation */}
            <motion.img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.08 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <motion.h2
                className="text-white text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {slide.title}
              </motion.h2>

              <motion.p
                className="text-gray-200 text-lg md:text-2xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {slide.subtitle}
              </motion.p>

              <motion.button
                className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-600 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Explore Now
              </motion.button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
