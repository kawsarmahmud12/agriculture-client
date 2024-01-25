import React, { useState } from 'react';
import banner from '../../assets/slidier2.jpeg'
import useTitle from '../../hooks/useTitle';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../shared/Loading';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const Payment = () => {
    const [totalAmount, setTotalAmount] = useState(10);
    const price = totalAmount*100;

    const Ontoken = token =>{
        const data = {token, totalAmount}
        axios.post('http://localhost:5173/payment', data).then(res =>{
            console.log(res);
            alert("payment successfully");
        }).catch(err => console.log(err));
    }

    useTitle("Payment")
    const payment = useLoaderData();

    const navigation = useNavigation();
    if (navigation.state === 'loading'){
        return (
            <Loading></Loading>
        )
    }
    return (
        <div>
            <div>
                <img className='w-full h-[50vh]' src={banner} alt="" />
                <div className='absolute top-0 bg-black w-full h-[50vh] bg-opacity-50'>
                    <h1 className='text-center text-white font-semibold text-3xl pt-28 md:pt-40'>View Details of <span className='primary-color text-yellow-300'>Insecticide</span></h1>
                </div>
            </div>
            <div>
                <StripeCheckout
                   stripeKey='pk_test_51ObOyLJOaqTt7bqvVAGqmCfwHDllmUXd0S6EvBMLBEe2iWhcerg4zzktFOilej2OnQxwAjqcTMBYoJzGgaTjh3qT00hIGESJzF'
                   token={Ontoken}
                   amount={price}
                   description={`total pay ${totalAmount}`}
                />
            </div>
        </div>
    );
};

export default Payment;