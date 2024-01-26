import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import useTitle from '../../hooks/useTitle';
import RegisterAnimation from '../../../dist/LoginAnimation.json'
import Lottie from "lottie-react";
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {
    const { createUser, updateUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [value, setValue] = useState();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    useTitle('Register')
    const handleRegister = event => {
        setError('');
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const password = form.password.value;
        console.log( number, password, email);

        //validation
        if (password.length < 6){
            setError('Password must be at least 6 characters');
        }
        else if(!/(?=.*[A-Z])/.test(password)){
            setError('please add at least one uppercase');
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('please password add at least two number');
            return;
        }
        else if(number.length>12){
            setError('Your number must be  11 characters');
        }
        else if (email === undefined) {
            setError('Email is required');
        }
        

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                sendVerificationEmail(result.user)
            })
            .catch(error => {
                console.log(error.message);
            })

        // createUser(email, password)
        //     .then(result => {
        //         const createUser = result.user;
        //         console.log(createUser);
        //         updateUser(name)
        //             .then(() => {
        //                 form.reset()
        //             })
        //             .catch(error => {
        //                 setError(error)
        //             })

        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
        const handleComplete = () =>{
            toast('user has been successfully');
        }

        
    }

    // email verification
    const sendVerificationEmail = (user) =>{
           sendEmailVerification(user)
           .then(result => {
             console.log(result);
             alert('please verify your email address');
           })
    }

    
    // sign in with google
    const handleSignInGoogle = event =>{
        event.preventDefault();
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error);
            })
    }

    // sign in with github
    const handleSignInGithub = event => {
        event.preventDefault();
        signInWithGithub()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error);
            })

    }


    return (
        <div className='flex justify-between mx-48'>
            <div className="">
                <div className="hero-content flex-col ">
                    <div className="text-center mt-16">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <form  onSubmit={handleRegister} className="card-body">
                            <div className="form-control mb-2">
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control mb-2">
                                <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                            </div>

                            <div className='border w-full'>
                                <input className='input input-bordered w-full' type="number" name="number" id="number" placeholder='Your Number' />
                            </div>

                            <div className="form-control mb-2">
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary text-lg">Register</button>
                            </div>

                            <div className='text-red-600 text-center'>
                                <p>{error}</p>
                            </div>
                        </form>
                        <div className='my-3 flex items-center justify-between'>
                            <hr className='w-[40%]' />
                            <p className='text-slate-500'>or</p>
                            <hr className='w-[40%]' />
                        </div>
                        <div className='flex mb-3 mx-auto mt-2'>
                            <button onClick={handleSignInGoogle} className="btn btn-outline btn-primary text-lg mr-3"><FaGoogle className='text-black' />Google</button>
                            <button onClick={handleSignInGithub} className="btn btn-outline btn-accent text-lg"><FaGithub className='text-black' />github
                            </button>
                        </div>
                        <div className=' mx-auto pb-7'>
                            Already have an account? <NavLink className="underline text-success" to="/login">Login</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-96 mt-40'>
                <Lottie animationData={RegisterAnimation} loop={true} />;
            </div>
        </div>
    );
};

export default Register;