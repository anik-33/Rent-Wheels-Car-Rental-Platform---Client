import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import BookingCard from '../../components/BookingCard';

const MyBookings = () => {

    const { user } = use(AuthContext)
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:3000/car/bookings?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setBookings(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch bookings:", err);
                setLoading(false);
            });
    }, [user]);

    if (loading) return <div>Loading...</div>;
    return (
        <div className='max-w-11/12 mx-auto'>
            <h1 className="text-2xl text-center font-bold mb-6">My Bookings</h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {bookings.map((booking) => (
                    <BookingCard key={booking._id} booking={booking}></BookingCard>
                ))}
            </div>
        </div>
    );
};

export default MyBookings;