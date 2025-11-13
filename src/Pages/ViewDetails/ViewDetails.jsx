import React, { use, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { motion } from "framer-motion";
import toast from 'react-hot-toast';

const ViewDetails = () => {

  const { id } = useParams();
  console.log(id)
  const { user } = use(AuthContext);

  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(true);
  const { CarName, Description, Category, RentPrice, Location, HostedImage, ProviderName, ProviderEmail, Status, CreatedAt,
  } = car;

  useEffect(() => {
    fetch(`https://rent-wheels-server-app.vercel.app/car/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {

        setCar(data.result);
        console.log(" Api called for viewing details!")
        console.log(data);
        setLoading(false);
      });
  }, [user, id]);

  const handleBooking=()=>{
    fetch(`https://rent-wheels-server-app.vercel.app/car/${id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({ Status: "Not Available" })
    })
    .then(res => res.json())
    .then(data =>{
      console.log('after update status',data)

    })
    .catch(err => console.error("Booking failed:", err));
    console.log("booking clicked")


    
            const formData = {
                BookEmail: user.email,
                CarName: CarName,
                Description: Description,
                Category: Category,
                RentPrice: RentPrice ,
                Location:Location ,
                ProviderName:ProviderName ,
                ProviderEmail:ProviderEmail ,
                HostedImage: HostedImage ,
                
                CreatedAt: new Date()
    
            }
            console.log(formData)
    
            fetch('https://rent-wheels-server-app.vercel.app/car/bookings', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
    
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Car Booked Successfully !")
                    // navigator("/All-Cars")
                    console.log(data)
                })
                .catch(err => {
                    console.log(err)
                })
    
    
  }


  if (loading) {
    return <div> Loading...</div>;
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
      >
        {/* --- Header Image --- */}
        <div className="relative">
          <img
            src={HostedImage}
            alt={CarName}
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

          <h2 className="absolute bottom-6 left-6 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            {CarName}
          </h2>

          <span
            className={`absolute top-6 right-6 px-4 py-2 text-sm font-semibold rounded-full ${Status === "Available"
                ? "bg-green-500/90 text-white"
                : "bg-red-500/90 text-white"
              }`}
          >
            {Status}
          </span>
        </div>

        {/* --- Main Info Section --- */}
        <div className="p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">{Description}</p>

              <div className="mt-6 space-y-3">
                <p>
                  <span className="font-medium text-gray-700">Category:</span>{" "}
                  {Category}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Rent Price:</span>{" "}
                  <span className="text-pink-600 font-semibold">{RentPrice}</span>
                </p>
                <p>
                  <span className="font-medium text-gray-700">Location:</span>{" "}
                  {Location}
                </p>
                <p className="text-sm text-gray-400">
                  Added on: {new Date(CreatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* --- Provider Info --- */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-inner">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Hosted By
              </h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium text-gray-700">Provider:</span>{" "}
                  {ProviderName}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Email:</span>{" "}
                  {ProviderEmail}
                </p>
              </div>

              <div className="mt-8 flex gap-4 flex-wrap">
                <Link
                  to="/"
                  className="inline-block px-6 py-2.5 rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium transition-all"
                >
                  ← Back to Cars
                </Link>

                <button
                  // onClick={() => navigate(`/booking/${id}`)}
                  onClick={handleBooking}
                  disabled={Status !== "Available"}
                  className={`inline-block  px-6 py-2.5 rounded-full font-medium text-white shadow-md transition-all duration-300 
                  ${Status === "Available"
                      ? "bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 hover:shadow-lg"
                      : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                  {Status === "Available" ? "🚗 Book Now" : "Not Available"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewDetails;