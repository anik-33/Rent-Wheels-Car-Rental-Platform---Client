import React from 'react';
import { Link } from 'react-router';

const CarCard = ({ car }) => {
    const { _id, Status, HostedImage, ProviderName, Location, RentPrice, Category, Description, CarName } = car
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className='relative'>
                <figure className="h-55 overflow-hidden">
                    <img
                        src={HostedImage}
                        alt={name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />

                </figure>
                <p className={` absolute top-2 right-2  
                    ${Status=== "Available" ? "badge badge-success" : "badge badge-warning" }
                    `}>{Status}</p>
            </div>

            <div className="card-body">
                <h2 className="card-title">{CarName}</h2>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className="badge text-xs badge-xs badge-secondary rounded-full">{Category}</div>

                        <div className="text-xs  mt-0.5">Provider: <span className='text-secondary'>{ProviderName}</span></div>
                    </div>
                    <div>
                        <p className='font-bold'>${RentPrice}/day</p>
                    </div>
                </div>
                <p className="line-clamp-1">
                    {Description}
                </p>
                {/* <p className="text-sm text-base-content/70">by {author}</p> */}
                <div className="card-actions justify-between items-center mt-1">

                    <Link to={`/details/${_id}`} className="btn rounded-full bg-linear-to-r from-purple-500 to-purple-700 hover:from-red-600 hover:to-purple-500 text-white w-full btn-sm">Click For Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;