import React from 'react';
import banner from '../../assets/slidier2.jpeg'
import { useLoaderData } from 'react-router-dom';

const FertilizerDetails = () => {
   const fertilizerDetails = useLoaderData();
   console.log(fertilizerDetails);
   const {img, title,price,description} = fertilizerDetails;

    return (
        <div>
            <div>
                <img className='w-full h-[50vh]' src={banner} alt="" />
                <div className='absolute top-0 bg-black w-full h-[50vh] bg-opacity-50'>
                    <h1 className='text-center text-white font-semibold text-3xl pt-28 md:pt-40'>View Details of <span className='primary-color text-yellow-300'>Fertilizers</span></h1>
                </div>
            </div>
            <div>
                {
                    fertilizerDetails?.map(fertilizerDetail => <div
                        key={fertilizerDetail.id}
                        fertilizerDetail={fertilizerDetail}
                    >
                      <div>
                          <h2>{fertilizerDetails.img}</h2>
                      </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FertilizerDetails;