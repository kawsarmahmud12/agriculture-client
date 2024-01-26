import React, { useState } from 'react';
import { FaRegStar } from 'react-icons/fa6';

const ProgressBar = () => {
    const formArray = [1, 2, 3, 4, 5];
    const [formNo, setFormNo] = useState(formArray[0]);

    return (
        <div className='w-screen h-screen bg-slate-300  justify-center items-center flex'>
            <div className="card w-[660px] rounded-md shadow-md bg-white p-5">
                {
                    formNo === 1 && <div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col mb-1 w-1/2 p-2'>
                                <label htmlFor="name">Name</label>
                                <input className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md' type="text" name="name" id="name" placeholder='Your Name' />
                            </div>
                            <div className='flex flex-col mb-1 w-1/2 p-2'>
                                <label htmlFor="name">Image</label>
                                <input className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md' type="file" name="" id="" />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col mb-2 w-1/2 p-2'>
                                <label htmlFor="number">Product Number</label>
                                <input className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md' type="number" name="number" id="number" placeholder='Product Number' />
                            </div>
                            <div className='flex flex-col mt-2 w-1/2 p-2'>
                                <label htmlFor="number">Rating</label>
                                <div className='flex p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md ml-1 mr-1'>
                                    <p className='text-yellow-400 mr-1'><FaRegStar /></p>
                                    <p className='text-yellow-400 mr-1'><FaRegStar /></p>
                                    <p className='text-yellow-400 mr-1'><FaRegStar /></p>
                                    <p className='text-yellow-400 mr-1'><FaRegStar /></p>
                                    <p className='text-yellow-400'><FaRegStar /></p>

                                </div>
                            </div>
                        </div>
                        <div className='mt-4 flex justify-center items-center'>
                            <button className='px-3 py-2 text-lg rounded-md w-1/2 text-white bg-blue-500'>Next</button>
                        </div>
                    </div>
                }
                {
                    formNo === 1 && <div>
                        <div className='flex flex-col mb-1 w-1/2 p-2'>
                            <label htmlFor="number">Number</label>
                            <input className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md' type="number" name="number" id="number" placeholder='Phone Number'/>
                        </div>
                        <div className='flex flex-col mb-1 w-1/2 p-2'>
                            <label htmlFor="message">Message</label>
                            <textarea className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md outline-none' name="text" id="" cols="30" rows="5" placeholder='Message' ></textarea>
                        </div>
                        <div className='mt-4 flex justify-center items-center'>
                            <button className='px-3 py-2 text-lg rounded-md w-1/2 text-white bg-blue-500'>Next</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProgressBar;