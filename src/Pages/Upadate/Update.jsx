import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useLoaderData, useNavigate, } from 'react-router';
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

        fetch(`https://rent-wheels-server-app.vercel.app/car/${car._id}`, {
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
        <div className="bg-gradient-to-r from-pink-50 to-red-50 py-10 px-4 min-h-screen flex justify-center items-center">
            <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-3xl p-8 transition-all duration-500 hover:shadow-pink-200">

                {/* Header */}
                <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-8">
                    Update Car Information
                </h2>

                <form onSubmit={handleUpdate} className="space-y-5">

                    {/* Car Name */}
                    <div>
                        <label className="label font-semibold text-gray-700">Car Name</label>
                        <input
                            type="text"
                            name="carName"
                            defaultValue={car.CarName}
                            required
                            className="input w-full rounded-full bg-white border-gray-200 focus:ring-2 focus:ring-pink-400 focus:outline-none px-4 py-2"
                            placeholder="Enter car name"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="label font-semibold text-gray-700">Rent Price</label>
                        <input
                            type="number"
                            name="Price"
                            defaultValue={car.RentPrice}
                            required
                            className="input w-full rounded-full bg-white border-gray-200 focus:ring-2 focus:ring-pink-400 focus:outline-none px-4 py-2"
                            placeholder="Enter price"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="label font-semibold text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            defaultValue={car.Location}
                            required
                            className="input w-full rounded-full bg-white border-gray-200 focus:ring-2 focus:ring-pink-400 focus:outline-none px-4 py-2"
                            placeholder="Enter location"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="label font-semibold text-gray-700">Category</label>
                        <select
                            name="category"
                            defaultValue={car.Category}
                            required
                            className="select w-full rounded-full bg-white border-gray-200 focus:ring-2 focus:ring-pink-400 focus:outline-none px-4 py-2"
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

                    {/* Description */}
                    <div>
                        <label className="label font-semibold text-gray-700">Description</label>
                        <textarea
                            name="description"
                            defaultValue={car.Description}
                            required
                            rows="4"
                            className="textarea w-full rounded-2xl bg-white border-gray-200 focus:ring-2 focus:ring-pink-400 focus:outline-none px-4 py-3 resize-none"
                            placeholder="Write a short description..."
                        ></textarea>
                    </div>

                    {/* Image */}
                    <div>
                        <label className="label font-semibold text-gray-700">Car Image URL</label>
                        <input
                            type="url"
                            name="carimg"
                            defaultValue={car.HostedImage}
                            required
                            className="input w-full rounded-full bg-white border-gray-200 focus:ring-2 focus:ring-pink-400 focus:outline-none px-4 py-2"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    {/* Owner Info */}
                    <div className="grid md:grid-cols-2 gap-2">
                        <div>
                            <label className="text-center ml-1.5 label font-semibold text-gray-700">Owner Name</label>
                            <input
                                type="text"
                                name="ownerName"
                                defaultValue={user.displayName}
                                readOnly
                                className="input w-full rounded-full bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed px-4 py-2"
                            />
                        </div>

                        <div>
                            <label className="text-center ml-1.5 label font-semibold text-gray-700">Owner Email</label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user.email}
                                readOnly
                                className="input w-full rounded-full bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed px-4 py-2"
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold text-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                        Update Info 🚗
                    </button>
                </form>
            </div>
        </div>

    );
};

export default Update;