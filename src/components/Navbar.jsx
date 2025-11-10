import React, { use } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

// [#632EE3]

const Navbar = () => {

    const activeStyle = "text-lg text-pink-500 font-semibold border-b-2 border-red-500";
    const normalStyle = "text-lg text-gray-700 hover:text-pink-500 transition";
    const nevigate = useNavigate();
    const { user, signOutUser } = use(AuthContext);
    const handlelogout = () => {
        signOutUser().then(() => {

            toast.success('successfully log out')
            nevigate('/auth/login')
        })
            .catch((error) => {
                console.log(error);
            })
    }
    const links = <>
        <NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to='/'> <li>Home</li></NavLink>
        <NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to='/bb'> <li>Browse Cars</li></NavLink>
        <NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to='/fw'> <li>Add Car</li></NavLink>
        <NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to='qf'> <li>My Listings</li></NavLink>
        <NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to='qwe'> <li className=''>My Bookings</li></NavLink>
        {
            user &&
            <NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to='/myprofile'><li>My Listings</li></NavLink>
        }
    </>
    return (
        <div className="navbar bg-base-100  shadow-sm">
            <div><Toaster /></div>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-600' to='/'> RentWheels</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-3 px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center">
                        <div className="dropdown dropdown-bottom dropdown-end">
                            {/* Trigger: user avatar */}
                            <div tabIndex={0} className="avatar cursor-pointer">
                                <img
                                    src={user.photoURL || "/default-avatar.png"}
                                    className="rounded-full border-2 h-12 w-12"
                                    alt={user.displayName || "User"}
                                />
                            </div>

                            {/* Dropdown content */}
                            <ul
                                tabIndex={-1}
                                className="dropdown-content menu bg-white rounded-box w-48 shadow-lg p-2 mt-2"
                            >
                                <li className='ml-2 text-lg font-bold'>
                                    {user.displayName}
                                </li>
                                <li>
                                    <button
                                        onClick={handlelogout}
                                        className="w-full text-left"
                                    >
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-3 ">
                        <Link to="/auth/login" className="btn text-white mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600">
                            Log in/Sign Up
                        </Link>
                        {/* <Link to="/auth/registration" className="btn bg-purple-700 text-white">
                            Register Now
                        </Link> */}
                    </div>
                )}
            </div>


        </div>
    );
};

export default Navbar;