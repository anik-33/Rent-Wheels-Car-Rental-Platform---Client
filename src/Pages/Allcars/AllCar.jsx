import React from 'react';
import { useLoaderData } from 'react-router';
import CarCard from '../../components/CarCard';

const AllCar = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='max-w-11/12 mx-auto mt-4'>

            <h2 className='text-center text-4xl mt-3'>Explore Our All Cars</h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {data.map((car) => (
                   <CarCard key={car._id} car={car}></CarCard>
                ))}
            </div>
        </div>
    );
};

export default AllCar;