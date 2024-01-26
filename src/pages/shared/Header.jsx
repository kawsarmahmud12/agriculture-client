import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaRegCircleUser, FaSquareXmark } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from '../../assets/logo.png'

const Header = ({children}) => {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [openProfile, setOpenProfile] = useState(false);

    // profile toggle
    const showProfile = () => {
        setOpenProfile(!openProfile);
    }
    // toggle menu for responsive
    const toggleMenu = () => {
        setOpenMenu(!isOpenMenu);
    }

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    // const [scrollTop, setScrollTop] = useState(0);
    // useEffect(() => {
    //     const handleScroll = (event) => {
    //       setScrollTop(window.scrollY);
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);
    return (
        <div>
            <div className="md:flex absolute navbar bg-black bg-opacity-50 justify-between container items-center z-50">
                <NavLink className='text-[32px] font-serif font-medium text-white'
                    to="/">Agriculture
                </NavLink>
                <div className='ml-96'>
                    <FaBarsStaggered className={!isOpenMenu ? 'md:hidden w-6 h-6 text-lg text-white' : 'hidden'} onClick={toggleMenu}></FaBarsStaggered>
                    <FaSquareXmark className={isOpenMenu ? 'md:hidden w-6 h-6 text-lg text-white' : 'hidden'} onClick={toggleMenu}></FaSquareXmark>
                </div>
                <div className={`md:flex text-white font-mono ${isOpenMenu ? 'absolute flex flex-col top-14 right-7 bg-black p-4 rounded-lg' : 'md:flex gap-2 items-center hidden'}`}>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-rose-600' : 'nav-link-hover'}><span className='mr-2 text-xl text-center'>Home</span></NavLink>
                    <NavLink to="/fertilizer" className={({ isActive }) => isActive ? 'text-rose-600' : 'nav-link-hover'}><span className='mr-3 text-xl text-center'>Fertilizers</span></NavLink>
                    <NavLink to="/seeds" className={({ isActive }) => isActive ? 'text-rose-600' : 'nav-link-hover'}><span className='mr-3 text-xl'>Seeds</span></NavLink>
                    <NavLink to="/progressbar" className={({ isActive }) => isActive ? 'text-rose-600' : 'nav-link-hover'}><span className='mr-3 text-xl text-center'>ProgressBar</span></NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-rose-600' : 'nav-link-hover'}><span className='mr-3 text-xl'>Contact</span></NavLink>
                    <div className='flex gap-1 items-center relative'>
                        {user && <div title={user.displayName}>
                            {
                                user.photoURL !== '' ? <img onClick={showProfile} className='w-12 h-12 rounded-full' src={logo} /> : <FaUserCircle className='w-7 h-7'></FaUserCircle>
                            }
                        </div>}
                        {!user ? <NavLink to="/login" className={({ isActive }) => isActive ? ' py-3 px-2 text-xl border-[#E25111]' : 'nav-link-hover'}><span className="btn btn-ghost text-xl bg-yellow-400">Login</span></NavLink> : ''}
                        {/* user profile section */}
                        <div onClick={showProfile} className={`min-w-[250px] h-fit absolute  rounded-md shadow-md hover:shadow-2xl bg-slate-700 py-8 px-5 ${openProfile ? 'top-12 right-7 ' : 'hidden'} `}>
                            <div className='w-[120px] h-[120px] mx-auto rounded-full border-2 border-[#E25111] overflow-hidden'>
                                <img src={logo} className='w-[120px] h-[120px] mx-auto rounded-full' alt="profile"/>
                            </div>
                            <div className='text-center  mt-5'>
                                <h1 className='text-base'>Name: kawsar mahmud {user?.displayName}</h1>
                                <p className='text-xs mt-3'>Email: {user?.email}</p>
                                <p className={user?.emailVerified ? 'text-xs text-white mt-1' : 'text-xs text-red-500 mt-1'}>{user?.emailVerified ? "" : ""}</p>
                                <div className=' text-xl  mt-4 px-3 py-1 rounded-full hover:bg-white hover:text-[#E25111]  hover:scale-[0.98] duration-200 origin-center bg-[#E25111] text-white w-1/2 mx-auto' onClick={handleLogOut}>Logout</div>
                                {/* <NavLink to="/login" className="btn btn-ghost text-xl bg-yellow-400">Login</NavLink> */}
                            </div>
                        </div>
                    </div>
                    {/* {user && <div title={user.displayName}>
                        <NavLink className="mr-2 inline-block text-3xl mt-4"><FaRegCircleUser /></NavLink>
                    </div>
                    }

                    {user ?
                        <NavLink onClick={handleLogOut} className="btn btn-ghost text-xl bg-yellow-400">LogOut</NavLink> :
                        <NavLink to="/login" className="btn btn-ghost text-xl bg-yellow-400">Login</NavLink>
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Header;