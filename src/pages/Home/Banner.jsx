import React from 'react';
import slider1 from '../../assets/sldier1.jpg'
import slider2 from '../../assets/slidier2.jpeg'
import slider3 from '../../assets/slidier3.jpeg'
import slider4 from '../../assets/slidier4.webp'
import LazyLoad from 'react-lazy-load';
import { Carousel } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <LazyLoad threshold={0.95}>
            
            <div className="carousel w-[100%] lg:w-full lg:h-[100vh] auto-Slide={true}">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider2} className="sm:w-full md:w-full lg:w-full" />
                    <div className='absolute top-0 bottom-0 container text-center bg-black w-full 
                    sm:h-[100vh] md:h-full  lg:h-full bg-opacity-50'>
                        <h1 className='mt-[15%] font-mono text-white lg:text-6xl md:text-4xl  font-bold'>We have best <span className='text-yellow-500'>Agriculture Products</span></h1>
                        <button className='bg-white text-black p-3 text-xl rounded mt-6'>Buy Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-50">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full" />
                    <div className='absolute top-0 bottom-0 container text-center bg-black w-full lg:h-[100vh] bg-opacity-50'>
                        <h1 className='mt-[15%] font-mono text-white lg:text-7xl md:text-4xl  font-bold'>We have best <span className='text-yellow-500'>Agriculture</span></h1>
                        <p className='text-white mt-6 lg:text-xl md:text-2xl mb-6'> </p>
                        <button className='bg-white text-black p-3 text-xl rounded '>
                            Order Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-50">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} className="w-full" />
                    <div className='absolute top-0 bottom-0 container text-center bg-black w-full lg:h-[100vh] bg-opacity-50'>
                        <h1 className='mt-[15%] font-mono text-white lg:text-7xl md:text-4xl  font-bold'>We have best <span className='text-yellow-500'>Agriculture</span></h1>
                        <p className='text-white mt-6 lg:text-xl md:text-2xl mb-6'></p>
                        <button className='bg-white text-black p-3 text-xl rounded '>Order Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-50">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </LazyLoad>

    );
};

export default Banner;