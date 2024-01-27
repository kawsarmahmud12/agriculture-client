import React, { useState } from 'react';
import banner from '../../assets/slidier2.jpeg'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const Checkout = () => {

    const itemName = "FIREING";
    const itemPrice = 500;
    const [quantity, setQuantity] = useState(1);
    const [finalAmount, setFinalAmount] = useState(itemPrice);

    const [totalAmount, setTotalAmount] = useState(10);
    const price = totalAmount * 100;

    const Ontoken = token => {
        const data = { token, totalAmount }
        axios.post('http://localhost:7000/payment', data)
            .then(res => {
                console.log(res);
                alert("payment successfully");
            }).catch(err => console.log(err));
    }

    const decrement = () => {
        if (quantity <= 1) {
            setQuantity(1)
            setFinalAmount(itemPrice)
        }
        else if (quantity > 1) {
            setQuantity(quantity - 1);
            setFinalAmount(finalAmount - itemPrice)
        }
    }

    const increment = () => {
        setQuantity(quantity + 1)
        setFinalAmount(finalAmount + itemPrice)
    }

    const checkout = async () => {
        try {
            const res = await fetch("http://localhost:5173/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify({
                    items: [
                        {
                            id: 1,
                            quantity: quantity,
                            price: itemPrice,
                            name: itemName
                        },
                    ]
                })
            });
            const data = await res.json();
            window.location = data.url;

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div>
                <img className='w-full h-[50vh]' src={banner} alt="" />
                <div className='absolute top-0 bg-black w-full h-[50vh] bg-opacity-50'>
                    <h1 className='text-center text-white font-semibold text-3xl pt-28 md:pt-40'>View Details of <span className='primary-color text-yellow-300'>seller</span></h1>
                </div>
            </div>
            <div className='w-full mx-auto'>
                <div className='text-center font-raleway w-full mx-w-5xl mx-auto '>
                    <div className='font-extrabold text-transparent text-6xl  bg-clip-text bg-gradient-to-r from-blue-400 to-red-800'>
                        Image Seller
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center items-center mx-auto w-full my-16 border-2 bg-white border-slate-100 shadow-md py-4'>
                        <div className='flex lg:justify-end justify-center items-center mx-auto my-24 w-full lg:w-6/16'>
                            <img src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='flex flex-col lg:w-6/12 w-full py-8'>
                            <div className='text-4xl font-bold text-yellow-700'>
                                {itemName}
                            </div>
                            <div className='text-3xl font-semibold my-6 text-gray-600'>
                                price:&nbsp;&nbsp;${itemPrice}
                            </div>
                            <small className='mt-10 mb-3 font-semibold'>Add Quantity</small>
                            <div className='flex text-slate-900 justify-center items-center mb-10'>
                                <span onClick={decrement} className='select-none w-auto px-4 py-2 text-5xl bg-blue-600 cursor-pointer'>
                                    -
                                </span>
                                <span className='w-auto px-4 py-2 text-3xl font-semibold'>
                                    {quantity}
                                </span>
                                <span onClick={increment} className='select-none w-auto px-4 py-2 text-5xl bg-blue-600 cursor-pointer'>
                                    +
                                </span>
                            </div>
                            <div className='my-6 text-xl'>
                                Amount to be paid:
                                <span className='text-gray-800 text-3xl font-bold pl-3'>
                                    ${finalAmount}
                                </span>
                            </div>
                            <div className='my-6'>
                                <StripeCheckout
                                    stripeKey='pk_test_51ObOyLJOaqTt7bqvVAGqmCfwHDllmUXd0S6EvBMLBEe2iWhcerg4zzktFOilej2OnQxwAjqcTMBYoJzGgaTjh3qT00hIGESJzF'
                                    token={Ontoken}
                                    amount={price}
                                    description={`total pay ${totalAmount}`}
                                />
                                {/* <button onClick={checkout} className='bg-green-400 text-white px-8 py-4 rounded-md text-2xl font-semibold'>
                               Checkout
                           </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;