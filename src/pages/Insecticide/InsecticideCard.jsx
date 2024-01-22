import React from 'react';
import { FaStar } from 'react-icons/fa6';

const InsecticideCard = ({ insecticide }) => {
    const { img, title, prize } = insecticide;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-4">
                <figure><img className='w-48 h-48 hover:scale-[1.3]' src={img} alt="Album" /></figure>
                <div className="flex justify-between w-full items-center">
                    <div>
                        <h2 className="card-title">Name: {title}</h2>
                        <p><span className='text-1xl font-bold'>Price:</span> {prize} Taka</p>
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
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-2">
                            <button className="btn join-item">VIEW</button>
                            <button className="btn join-item">EDIT</button>
                            <button className="btn join-item">DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsecticideCard;