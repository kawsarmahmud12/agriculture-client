import React from 'react';
import { Link } from 'react-router-dom';
import { IoThumbsUpOutline } from "react-icons/io5";
import useTitle from '../../hooks/useTitle';
import { FaStar } from 'react-icons/fa6';

const Chef = ({ recipe }) => {
    const { id, chef_name, chef_picture, num_of_recipes, likes, price } = recipe
    useTitle('Agriculture Details')
    return (
        <div className=' border p-3'>
            <div className='overflow-hidden'>
                <img className='hover:scale-[1.3] origin-center duration-150 rounded-md w-full h-48 ' src={chef_picture} alt="" />
            </div>
            <div className='mt-3'>
                <h3 className='text-[18px] font-semibold text-black'>Name: {chef_name}</h3>

                <h3 className='text-[15px] text-slate-600 font-medium'>num of Agriculture: {num_of_recipes}</h3>
                <h3 className='text-[15px] text-slate-600 font-medium'>Price: {price} TK</h3>
                <div className='flex items-center mt-[2px] mb-4'>
                    <div className='text-[15px] text-slate-600 font-medium'>Rating:</div>
                    <div className='flex items-center'>
                        <p className='text-yellow-400'><FaStar /></p>
                        <p className='text-yellow-400'><FaStar /></p>
                        <p className='text-yellow-400'><FaStar /></p>
                        <p className='text-yellow-400'><FaStar /></p>
                        <p className='text-yellow-400'><FaStar /></p>
                    </div>
                </div>
                <Link to={`View_Recipe/${id}`} className='border-green-400 btn btn-outline btn-success'>
                    view all Agriculture
                </Link>

            </div>
        </div>
    );
};

export default Chef;