import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const FertilizerCard = ({ fertilizer }) => {
    const {id, img, title, price, } = fertilizer
    return (
        <div>
            <div className="card w-full glass hover:shadow-[20px]">
                <figure><img className='w-60 h-60 hover:scale-[1.3] origin-center duration-150 rounded-md' src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {title}</h2>
                    <p><span className='text-1xl font-bold'>Price:</span> {price} Taka</p>
                    <div className='flex items-center'>
                        <div><p className='text-1xl font-bold'>Rating: </p></div>
                        <div className='flex items-center ml-1'>
                            <p className='text-yellow-400'> <FaStar /></p>
                            <p className='text-yellow-400'> <FaStar /></p>
                            <p className='text-yellow-400'> <FaStar /></p>
                            <p className='text-yellow-400'> <FaStar /></p>
                            <p className='text-yellow-400'> <FaStar /></p>
                        </div>
                    </div>
                    <Link to={`/FertilizerDetails/${id}`} className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FertilizerCard;