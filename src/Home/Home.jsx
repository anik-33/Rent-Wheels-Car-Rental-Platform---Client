import React from 'react';
import { Link, useLoaderData } from "react-router";
import Swiperr from '../components/Swiperr';
import CarCard from '../components/CarCard';
const Home = () => {
    const data = useLoaderData()

    return (
        <div className=''>
            <Swiperr></Swiperr>

            <div className='max-w-11/12 mx-auto'>
                <div className="text-center text-xl md:text-4xl font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-600">Latest Featured Cars</div>


                <div className="mt-5 grid grid-cols-3 lg:grid-cols-3 gap-3">
                    {data.map((car) => (
                        <CarCard key={car._id} car={car}></CarCard>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Home;