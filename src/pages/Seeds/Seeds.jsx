import React from 'react';
import banner from '../../assets/slidier2.jpeg'
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../shared/Loading';
import useTitle from '../../hooks/useTitle';
import Seed from './Seed';
// import Seed from './Seed';


const Seeds = () => {
    const seeds = useLoaderData();
    useTitle("Seeds")
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
                    <h1 className='text-center text-white font-semibold text-3xl pt-28 md:pt-40'>View Details of <span className='primary-color text-yellow-300'>Seeds</span></h1>
                </div>
            </div>
           

            <div>
                <h2 className='text-center text-3xl text-cyan-600 mt-4'>Seeds</h2>
                <hr className='w-[8%] mx-auto' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mx-20'>

                    {
                        seeds?.map(seed => <Seed
                            key={seed.id}
                            seed={seed}
                        >

                        </Seed>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Seeds;