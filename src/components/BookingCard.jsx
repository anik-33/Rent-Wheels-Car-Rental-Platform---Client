import React from "react";
import { Link } from "react-router-dom";

const BookingCard = ({ booking }) => {
  const {
    _id,
    CarName,
    HostedImage,
    RentPrice,
    ProviderName,
    CreatedAt,
  } = booking;

  return (
    <div className="card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="relative">
        <figure className="h-52 overflow-hidden">
          <img
            src={HostedImage}
            alt={CarName}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </figure>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold">{CarName}</h2>
        <p className="text-sm text-gray-600">Provider: {ProviderName}</p>
        <p className="font-semibold mt-1">${RentPrice}/day</p>
        <p className="text-xs text-gray-400 mt-1">
          Booked on: {new Date(CreatedAt).toLocaleDateString()}
        </p>
        <Link
          
          className="mt-3 inline-block w-full text-center px-4 py-2 rounded-full text-white bg-gradient-to-r from-gray100 to-gray-600 hover:from-red-600 hover:to-pink-500 transition-all"
        >
          Cancel Booking
        </Link>
      </div>
    </div>
  );
};

export default BookingCard;
