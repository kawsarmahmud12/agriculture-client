import React from 'react';
import './progress.css'
import banner from '../../assets/slidier2.jpeg'

const Progress = () => {
    return (
        <div>
            <div>
                <img className='w-full h-[50vh]' src={banner} alt="" />
                <div className='absolute top-0 bg-black w-full h-[50vh] bg-opacity-50'>
                    <h1 className='text-center text-white font-semibold text-3xl pt-28 md:pt-40'>View Details of <span className='primary-color text-yellow-300'>Insecticide</span></h1>
                </div>
            </div>
            <div className='w-screen h-screen bg-slate-300  justify-center items-center flex'>
                <div className="card w-[660px] rounded-md shadow-md bg-white p-5">
                    <div className='flex flex-col mb-1 w-1/2 p-2'>
                        <label htmlFor="number">Name</label>
                        <input className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md' type="name" name="name" id="name" placeholder='Your Name'/>
                    </div>
                    <div className='flex flex-col mb-1 w-1/2 p-2'>
                        <label htmlFor="number">Product Number</label>
                        <input className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md' type="number" name="number" id="number" placeholder='Phone Number'/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Progress;