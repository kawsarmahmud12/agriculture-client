import React from 'react';
import banner from '../../assets/slidier2.jpeg'
import useTitle from '../../hooks/useTitle';
import { useLoaderData, useNavigation } from 'react-router-dom';
import FertilizerCard from './FertilizerCard';
import Loading from '../shared/Loading';

const Fertilizers = () => {
    useTitle("Fertilizer")
    const fertilizers = useLoaderData();

    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return (
            <Loading></Loading>
        )
    }
    return (
        <div>
            <div>
                <img className='w-full h-[50vh]' src={banner} alt="" />
                <div className='absolute top-0 bg-black w-full h-[50vh] bg-opacity-50'>
                    <h1 className='text-center text-white font-semibold text-3xl pt-28 md:pt-40'>View Details of <span className='primary-color text-yellow-300'>Fertilizers</span></h1>
                </div>
            </div>
            <h2 className='text-center text-3xl text-cyan-600 mt-4'>Fertilizers</h2>
            <hr className='w-[10%] mx-auto mb-6' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-20'>
                {
                    fertilizers.map(fertilizer => <FertilizerCard

                        key={fertilizer.id}
                        fertilizer={fertilizer}

                    >

                    </FertilizerCard>)
                }
            </div>
        </div>
    );
};

export default Fertilizers;