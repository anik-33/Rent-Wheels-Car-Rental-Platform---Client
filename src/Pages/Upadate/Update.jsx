import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {  useLoaderData, useNavigate, } from 'react-router';
import toast from 'react-hot-toast';

const Update = () => {

    const { user } = use(AuthContext)
    const data = useLoaderData()
    console.log(data)
    const car = data.result
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault()
        const formData = {
            CarName: e.target.carName.value,
            Description: e.target.description.value,
            Category: e.target.category.value,
            RentPrice: e.target.Price.value,
            Location: e.target.location.value,
            ProviderName: user.displayName,
            ProviderEmail: user.email,
            HostedImage: e.target.carimg.value,
            Status: 'Available',
            CreatedAt: new Date()

        }

        fetch(`http://localhost:3000/car/${car._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("Successfully updated!");
                navigate("/my-listing")
                
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="card mt-4 p-2 border border-gray-200 bg-base-100 w-full max-w-md md:max-w-lg mx-auto shadow-2xl rounded-2xl">
            <div className="card-body p-6 relative">
                <h2 className="text-2xl font-bold text-center mb-6">Update Car Info</h2>
                <form onSubmit={handleUpdate} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="label font-medium">Car Name</label>
                        <input
                            type="text"
                            defaultValue={car.CarName}
                            name="carName"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter name"
                        />
                    </div>
                    {/* Price Field */}
                    <div>
                        <label className="label font-medium">Price</label>
                        <input
                            type="number"
                            name="Price"
                            defaultValue={car.RentPrice}
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter Price"
                        />
                    </div>
                    {/* Location Field */}
                    <div>
                        <label className="label font-medium">Location</label>
                        <input
                            type="text"
                            defaultValue={car.Location}
                            name="location"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter name"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <label className="label font-medium">Category</label>
                        <select
                            defaultValue={car.Category}
                            name="category"
                            required
                            className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                        >
                            <option value="" disabled>
                                Select category
                            </option>
                            <option value="RaceCar">RaceCar</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Electric">Electric</option>
                        </select>
                    </div>

                    {/* Description Textarea */}
                    <div>
                        <label className="label font-medium">Description</label>
                        <textarea
                            name="description"
                            defaultValue={car.Description}
                            required
                            rows="3"
                            className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                            placeholder="Enter description"
                        ></textarea>
                    </div>

                    {/* Car Image URL */}
                    <div>
                        <label className="label font-medium">Car Image</label>
                        <input
                            type="url"
                            defaultValue={car.HostedImage}
                            name="carimg"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    {/*  Car Owner Name Field */}
                    <div>
                        <label className="label font-medium">Your Name</label>
                        <input
                            type="text"
                            name="ownerName"
                            defaultValue={user.displayName}
                            readOnly
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter name"
                        />
                    </div>
                    {/*  Car Owner Email Field */}
                    <div>
                        <label className="label font-medium">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={user.email}
                            readOnly
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter name"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
                    >
                        Update Info
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;