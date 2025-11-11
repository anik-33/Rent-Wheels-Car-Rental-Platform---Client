import React from 'react';
import { Link, useLoaderData } from "react-router";
import Swiperr from '../components/Swiperr';
import CarCard from '../components/CarCard';
import WhyOus from '../components/WhyOus';
import Testimonials from '../components/Testimonials';
import LatestCar from '../components/LatestCar';
const Home = () => {
    const carData = useLoaderData()

    return (
        <div className=''>
            <Swiperr></Swiperr>
                {/* featured latest cars */}
           <LatestCar carData={carData}></LatestCar>
            
            <WhyOus></WhyOus>

            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;