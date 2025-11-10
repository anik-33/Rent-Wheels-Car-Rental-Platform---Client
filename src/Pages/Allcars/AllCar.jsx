import React from 'react';
import { useLoaderData } from 'react-router';
import CarCard from '../../components/CarCard';

const AllCar = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='max-w-11/12 mx-auto'>



            <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
                {data.map((car) => (
                   <CarCard key={car._id} car={car}></CarCard>
                ))}
            </div>
        </div>
    );
};

export default AllCar;