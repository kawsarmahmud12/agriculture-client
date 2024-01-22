import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaRegCircleUser, FaSquareXmark } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const { user, logOut } = useContext(AuthContext)

    // toggle menu for responsive
    const toggleMenu = () => {       
        setOpenMenu(!isOpenMenu);
    }

    const handleLogOut = () => {  
        logOut()
            .then()
            .catch(error => console.log(error))
    }
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
                    <NavLink to="/insecticide" className={({ isActive }) => isActive ? 'text-rose-600' : 'nav-link-hover'}><span className='mr-3 text-xl text-center'>Insecticide</span></NavLink>
                    <NavLink to="/fertilizer" className={({ isActive }) => isActive ? 'text-rose-600' : 'nav-link-hover'}><span className='mr-3 text-xl text-center'>Fertilizers</span></NavLink>
                    <NavLink to="/seeds" className={({ isActive }) => isActive ? 'text-rose-600' : 'nav-link-hover'}><span className='mr-3 text-xl'>Seeds</span></NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-rose-600' : 'nav-link-hover'}><span className='mr-3 text-xl'>Contact</span></NavLink>
                    {user && <div title={user.displayName}>
                        <NavLink className="mr-2 inline-block text-3xl mt-4"><FaRegCircleUser /></NavLink>
                    </div>
                    }

                    {user ?
                        <NavLink onClick={handleLogOut} className="btn btn-ghost text-xl bg-yellow-400">LogOut</NavLink> :
                        <NavLink to="/login" className="btn btn-ghost text-xl bg-yellow-400">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;