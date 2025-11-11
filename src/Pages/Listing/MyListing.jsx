import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';


const MyListing = () => {
    const {user}=use(AuthContext)
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {

        fetch(`http://localhost:3000/my-listing?email=${user.email}`)
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            setCars(data)
            setLoading(false)
        })

    }, [user])


    if(loading) {
        return <div> Please wait ... Loading...</div>
    }


    return (
       <div>
        {
            cars.map(car =>(
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
                            <Link><button className="btn btn-warning btn-xs">Dellet</button></Link>
                        </td>
                       
                    </tr>
                   
                </tbody>
              
            </table>
        </div>
            ))
        }
       </div>

    );
};

export default MyListing;