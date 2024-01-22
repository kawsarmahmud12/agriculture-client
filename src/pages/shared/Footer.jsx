import React from 'react';
import { FaFacebookF, FaInstagram, FaSquareTwitter, FaPinterestP, FaYoutube } from "react-icons/fa6";
import Messenger from '../Messenger/Messenger';

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#eceaea] w-full md:h-[40vh] lg:h-[40vh] container '>
            <div className='mt-12'>
                <h3 className='text-[24px] font-medium'>Fresh Agriculture</h3>
                <div className='mb-4 text-[#424040]'>
                    <p>Agriculture</p>
                    <p>Winter salads</p>
                    <p>Organic chicken</p>
                    <p>Beef and Mutton</p>
                    <p>Flavoured Milk</p>
                </div>
            </div>
            <div>
                <div className='mt-12'>
                    <h3 className='text-[24px] font-medium'>In Agriculture</h3>
                    <div className='mb-4 text-[#424040]'>
                        <p>Our Blogs</p>
                        <p>Contests/Sweepsatkes</p>
                        <p>Video</p>
                        <p>New Releases</p>
                        <p>Agriculture</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-12'>
                    <h3 className='text-[24px] font-medium'>About US</h3>
                    <div className='mb-4 text-[#424040]'>
                        <p>FAQ</p>
                        <p>Our Board</p>
                        <p>Our Staff</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-12'>
                    <h3 className='text-[24px] font-mono'>Join Our Agriculture</h3>
                    <div className='mt-4'>
                        <input className='border border-indigo-600 p-1 rounded-md' placeholder='Email' type="email" name="" id="" />
                    </div>
                    <div className='flex text-lg mt-4 mb-3'>
                       <div><FaFacebookF/></div>
                       <div className='ml-2'><FaInstagram/></div>
                       <div className='ml-2'><FaSquareTwitter/></div>
                       <div className='ml-2'><FaPinterestP/></div>
                       <div className='ml-2'><FaYoutube/></div>
                    </div>
                </div>
            </div>
            <Messenger></Messenger>
        </div>
    );
};

export default Footer;