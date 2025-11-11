import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';
import Swal from "sweetalert2";

const MyListing = () => {
    const { user } = use(AuthContext)
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)
   

    useEffect(() => {

        fetch(`http://localhost:3000/my-listing?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCars(data)
                setLoading(false)
            })

    }, [user])


    const handleDlete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/car/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if(data.result.deletedCount > 0){
                            setCars(prev => prev.filter(car => car._id !== id));
                             
                            Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                        } else{
                            Swal.fire("Error!", "Failed to delete car.", "error");
                        }

                       
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        });
    };


    if (loading) {
        return <div> Please wait ... Loading...</div>
    }


    return (
        <div className='max-w-11/12 mx-auto'>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Car Name</th>
                            <th>Category</th>
                            <th>Rent Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cars.map(car => (
                                <tr>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={car.HostedImage} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{car.CarName}</div>
                                                <div className="text-sm opacity-50">{car.Location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {car.Category}
                                        <br />
                                        {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                    </td>
                                    <td>${car.RentPrice}</td>
                                    <td>{car.Status}</td>
                                    <td>
                                        <Link to={`/update-car/${car._id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
                                        <button onClick={() => handleDlete(car._id)} className="btn btn-warning btn-xs">Dellet</button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>

        </div>

    );
};

export default MyListing;