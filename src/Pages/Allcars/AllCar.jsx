import React from 'react';
import { useLoaderData } from 'react-router';
import CarCard from '../../components/CarCard';
import { Typewriter } from 'react-simple-typewriter';

const AllCar = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='max-w-11/12 mx-auto mt-4'>

             <div className="text-center text-3xl md:text-4xl md:font-extrabold mb-4 font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            
                            Our All Featured Cars <br />
            
                            <span className='mt-1 text-3xl'>
                                <Typewriter
                                    words={['Premium and Comfortable', 'Book Now!', 'Enjoy Your Day!']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
            
                                />
            
            
                            </span>
            
                        </div>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {data.map((car) => (
                   <CarCard key={car._id} car={car}></CarCard>
                ))}
            </div>
        </div>
    );
};

export default AllCar;