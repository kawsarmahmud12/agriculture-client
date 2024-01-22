import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from '../shared/Loading';
import { FaStar } from 'react-icons/fa6';

const Seed = ({ seed }) => {
    const { img, title, name, price } = seed
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return (
            <Loading></Loading>
        )
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 hover:shadow-xl border p-2">
                <figure><img className='hover:scale-[1.3] origin-center duration-150 rounded-md' src={img} alt="Shoes" /></figure>
                <p className="text-slate-400 mt-4">{name}</p>
                <div className="" style={{ padding: 0 }}>
                    <h2 className="card-title text-[17px] pb-0" >{title}</h2>
                    <h2 className='text-[15px] font-medium'><span className='text-[18px] font-medium'>Price:</span> {price} Taka</h2>
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
                    <div className="card-actions justify-end">
                       <button className="btn btn-outline btn-success">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seed;