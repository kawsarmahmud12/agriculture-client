import React, { useEffect, useState } from 'react';
import banner from '../../assets/slidier2.jpeg'
import { useLoaderData, useNavigation } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import InsecticideCard from './InsecticideCard';

const Insecticide = () => {
    useTitle("Insecticide")
    const insecticides = useLoaderData();

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
                <div className='container'>
                    <h2>show all data:{insecticides.length}</h2>
                    <div className='grid md:grid-cols-2 gap-4'>
                        {
                            insecticides?.map(insecticide => <InsecticideCard 
                                key={insecticide.id}
                                insecticide = {insecticide}
                                >
                                
                            </InsecticideCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insecticide;