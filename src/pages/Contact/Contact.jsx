import React from 'react';
import banner from '../../assets/slidier2.jpeg'
import useTitle from '../../hooks/useTitle';
// import MyLocation from '../../location/MyLocation';

const Contact = () => {
    useTitle('Contact');

    return (
        <div>
            <img className='w-full h-[50vh]' src={banner} alt="" />
            <div className='absolute top-0 bg-black w-full h-[50vh] bg-opacity-50'>
                <h1 className='text-center text-white font-semibold text-3xl pt-28 md:pt-40'><span className='primary-color text-yellow-300'>Contact
                </span></h1>
            </div>
            <h2 className="bg-slate-500 font-thi mt-10  pb-6 text-4xl pt-20 text-white text-center">Contact Me</h2>
            <div className=''>
                <div>
                    <div className="contact-form bg-slate-500 mb-10 pb-14 flex items-center justify-center">
                        <form className="border p-8">
                            <div className="input-header sm:flex gap-8">
                                <input className="ptag p-2 px-14 rounded" placeholder="  First name" /><br />
                                <input className="ptag p-2 px-14 rounded" placeholder="   Last name" /><br />
                            </div>
                            <div className="input-header sm:flex gap-8 mt-4">
                                <input className="ptag p-2 px-14 rounded" placeholder="  Email" /><br />
                                <input className="ptag p-2 px-14 rounded" placeholder="  Phone" /><br />
                            </div>

                            <div className="mt-4 ">
                                <textarea className="w-[95%] h-40  rounded mr-20 resize-none" placeholder="  Your Message" />
                            </div>
                            <p></p>
                            <input className="submit text-white ml-20 sm:ml-72 px-8 py-2 mt-8 rounded-sm border" type="submit" />

                        </form>
                    </div>
                </div>
                <div>
                    {/* <MyLocation></MyLocation> */}
                </div>
            </div>

        </div>
    );
};

export default Contact;