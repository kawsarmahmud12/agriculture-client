import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const CategoryCard = ({ category }) => {
    const { img, title, description, prize } = category;

    const handleToast = () => {
        toast("Wow so easy!");
    }
    
    return (
        <div className='shadow-xl p-4 border rounded-md overflow-hidden'>
            <img className='rounded-md w-full blur-0 hover:scale-[1.05] duration-200 object-cover origin-center' src={img} alt="" />
            <div>
                <h2 className=' text-md font-semibold mt-3'>{title}</h2>
                <p className='text-center'>{description}</p>
                <p>Prize: {prize}TK</p>
                
                <div className='flex items-center'>
                    <div><p>Rating: </p></div>
                    <div className='flex items-center ml-1'>
                        <p className='text-yellow-400'> <FaStar/></p>
                        <p className='text-yellow-400'> <FaStar/></p>
                        <p className='text-yellow-400'> <FaStar/></p>
                        <p className='text-yellow-400'> <FaStar/></p>
                        <p className='text-yellow-400'> <FaStar/></p>
                   </div>
                </div>
                <Link>
                    <button onClick={handleToast} className="btn btn-warning mx-auto block mt-4">Buy Now</button>
                </Link>
            </div>
        </div>

    );
};

export default CategoryCard;