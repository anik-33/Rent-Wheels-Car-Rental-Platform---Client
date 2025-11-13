import React, { useState } from 'react';
import CarCard from './CarCard';
import { Typewriter } from 'react-simple-typewriter';

const LatestCar = ({ carData }) => {


    const [cars, setCars] = useState(carData)
    const [loading, setLoading] = useState(false)



    const handleSearch = (e) => {
        e.preventDefault()
        const search_text = e.target.search.value
        console.log(search_text)
        setLoading(true)

        fetch(`http://localhost:3000/search?search=${search_text}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCars(data)
                setLoading(false)
            })
    }


    return (
        <div className='max-w-11/12 mx-auto'>
            <div className="text-center text-4xl md:text-5xl md:font-extrabold mb-4 font-bold mt-7  bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">

                Our Latest Featured Cars <br />

                <span className='mt-1'>
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


            <form onSubmit={handleSearch} className=" mt-5 mb-10 flex gap-2 justify-center">
                <label className="input rounded-full ">
                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={(e) => {
                        const value = e.target.value.trim();
                        if (!value) setCars(carData);
                    }} name="search" type="search" placeholder="Search" />
                </label>
                <button className="btn btn-secondary  rounded-full">{loading ? "Searching...." : "Search"}</button>
            </form>


            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                {cars.map((car) => (
                    <CarCard key={car._id} car={car}></CarCard>
                ))}
            </div>

        </div>
    );
};

export default LatestCar;