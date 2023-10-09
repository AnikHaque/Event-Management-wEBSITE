import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';
import SocialLogin from '../login/SocialLogin/SocialLogin';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <h1>Loading....</h1>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const image = event.target.image.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name , photoURL:image});
        console.log('Updated profile');
        navigate('/');
    }

    return (
        // <div className='register-form  container bg-login mx-auto p-5 mt-5'>
        //     <h5 style={{ textAlign: 'center' }}>Please Register</h5>
        //     <form onSubmit={handleRegister}>
        //         <input type="text" name="name" id="" placeholder='Your Name' />

        //         <input type="email" name="email" id="" placeholder='Email Address' required />

        //         <input type="password" name="password" id="" placeholder='Password' required />
        //         <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        //         {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
        //         <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Term Conditions</label>
        //         <input
        //             disabled={!agree}
        //             className='w-50 mx-auto btn btn-primary mt-2'
        //             type="submit"
        //             value="Register" />
        //     </form>
        //     <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        //     <SocialLogin></SocialLogin>
        // </div>

        <div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mt-12">
                <h1 className="text-2xl font-bold text-center">Please Register Now</h1>
                <form onSubmit={handleRegister} novalidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block text-gray-600">UserName</label>
                        <input type="text" name="name"  placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-rose-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block text-gray-600">Email</label>
                        <input type="email" name="email" id="" placeholder='Email Address' required className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-rose-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="image" className="block text-gray-600">Your Image</label>
                        <input type="text" name="image" placeholder="Your Image Url" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-rose-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block text-gray-600">Password</label>
                        <input type="password" name="password" id="" placeholder='Password' required className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-rose-600" />
                        <div className="flex justify-end text-xs text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-rose-600">Sign Up</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <SocialLogin />

                </div>
                <p className="text-xs text-center sm:px-6 text-gray-600">Already have an account?
                    <Link to="/login" className="underline text-gray-800">Login</Link>

                </p>
            </div>
        </div>
    );
};

export default Register;