import React, { useState } from 'react';
import { FaRegStar } from 'react-icons/fa6';
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProgressBar = () => {
    const formArray = [1, 2, 3, 4, 5];

    const [formNo, setFormNo] = useState(formArray[0]);
    const [state, setState] = useState({
        name:'',
        file: '',
        number:'',
        message:'',
        email:'',
        payment:'',
        delivery:'',
    })
    const inputHandle = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    }
    const next = () =>{
        if(formNo === 1 && state.name && state.file && state.number){
            setFormNo(formNo + 1);
        }
        else if(formNo === 2 && state.number && state.message){
            setFormNo(formNo + 1);
        }
        else if(formNo === 3 && state.email){
            setFormNo(formNo + 1);
        }
        else if(formNo === 4 && state.payment){
            setFormNo(formNo + 1);
        }
        else if(formNo === 5 && state.delivery){
            setFormNo(formNo + 1);
        }else{
            toast.error('fillup all input field')
        }
        
    }
    const pre = () =>{
        setFormNo(formNo-1)
    }

    const submitHandle = () =>{
        toast.error("submitted successfully")
    }

    return (
        <div className='w-screen h-screen bg-slate-300  justify-center items-center flex'>
            <div className="card lg:w-[660px] md:w-[460px] sm:w-[360px] rounded-md shadow-md bg-white p-5">
            <ToastContainer />
                <div className='flex justify-between px-8 text-center'>
                    <div><p>ডিলার নির্বাচন</p></div>
                    <div><p>কৃষি অফিসার</p></div>
                    <div><p>প্রোডাক্ট অর্ডার</p></div>
                    <div><p>পেমেন্ট</p></div>
                    <div className='mr-5'><p>ডেলিভারি</p></div> 
                </div>
                <div className='flex justify-center items-center'>
                    {
                       formArray.map((v,i)=> <><div className={`w-[35px] h-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo - 1 === i + 2 || formNo - 1 === i + 3 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400' }  flex justify-center items-center`}>
                           {v}
                       </div>
                       {
                         i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === i + 3 ||  formNo === i + 4 || formNo == formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}>
                            
                         </div>
                       }
                       </>) 
                    }
                </div>
                {
                    formNo === 1 && <div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col mb-1 w-1/2 p-2'>
                                <label htmlFor="name">Name</label>
                                <input onChange={inputHandle} className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md' type="text" name="name" id="name" placeholder='Your Name' />
                            </div>
                            <div className='flex flex-col mb-1 w-1/2 p-2'>
                                <label htmlFor="name">Image</label>
                                <input onChange={inputHandle} className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md' type="file" name="file" id="file" />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col mb-2 w-1/2 p-2'>
                                <label htmlFor="number">Product Number</label>
                                <input onChange={inputHandle} className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md' type="number" name="number" id="number" placeholder='Product Number'/>
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
                            <button onClick={next} className='px-3 py-2 text-lg rounded-md w-1/2 text-white bg-blue-500'>Next</button>
                        </div>
                    </div>
                }
                {
                    formNo === 2 && <div>
                        <div className='flex flex-col mb-1 w-1/2 p-2'>
                            <label htmlFor="number">Number</label>
                            <input onChange={inputHandle}  className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md' type="number" name="number" id="number" placeholder='Phone Number' />
                        </div>
                        <div className='flex flex-col mb-1 w-1/2 p-2'>
                            <label htmlFor="message">Message</label>
                            <textarea onChange={inputHandle} className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md outline-none 'type='text'name="message" id="message" cols="30" rows="5" placeholder='Message' ></textarea>
                        </div>
                        <div className='mt-4 flex justify-center items-center'>
                            <button onClick={pre} className='mr-2 px-3 py-2 text-lg rounded-md w-1/2 text-white bg-blue-500'>Previous</button>
                            <button onClick={next} className='px-3 py-2 text-lg rounded-md w-1/2 text-white bg-blue-500'>Next</button>
                        </div>
                    </div>
                }
                {
                    formNo === 3 && <div>
                        <div className='flex flex-col mb-1 w-1/2 p-2'>
                            <label htmlFor="number">email</label>
                            <input onChange={inputHandle} className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md' type="email" name="email" id="email" placeholder='Email' />
                        </div>
                        
                        <div className='mt-4 flex justify-center items-center'>
                            <button onClick={pre} className='mr-2 px-3 py-2 text-lg rounded-md w-1/2 text-white bg-blue-500'>Previous</button>
                            <button onClick={next} className='px-3 py-2 text-lg rounded-md w-1/2 text-white bg-blue-500'>Next</button>
                        </div>
                    </div>
                }
                {
                    formNo === 4 && <div>
                        <div className='flex flex-col mb-1 w-1/2 p-2'>
                            <label htmlFor="number">Payment</label>
                            
                            <input onChange={inputHandle} className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md' type="payment" name="payment" id="payment" placeholder='payment' />
                        </div>
                        
                        <div className='mt-4 flex justify-center items-center'>
                            <button onClick={pre} className='mr-2 px-3 py-2 text-lg rounded-md w-1/2 text-white bg-blue-500'>Previous</button>
                            <button onClick={next} className='px-3 py-2 text-lg rounded-md w-1/2 text-white bg-blue-500'>Next</button>
                        </div>
                    </div>
                }
                {
                    formNo === 5 && <div>
                        <div className='flex flex-col mb-1 w-1/2 p-2'>
                            <label htmlFor="number">delivery</label>
                            <input onChange={inputHandle} className='p-2 border border-slate-400 mt-1  outline-0 focus:border-blue-500 rounded-md' type="delivery" name="delivery" id="delivery" placeholder='delivery' />
                        </div>
                        
                        <div className='mt-4 flex justify-center items-center'>
                            <button onClick={pre} className='mr-2 px-3 py-2 text-lg rounded-md w-1/2 text-white bg-blue-500'>Previous</button>
                            <button onClick={submitHandle} className='px-3 py-2 text-lg rounded-md w-1/2 text-white bg-blue-500'>submit</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProgressBar;