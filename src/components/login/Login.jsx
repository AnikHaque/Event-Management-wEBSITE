import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../login/SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        return <h1>Loading .....</h1>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
            await signInWithEmailAndPassword(email, password);
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                toast.error('Password doesn\'t match.');
            } else if (error.code === 'auth/user-not-found') {
                toast.error('Email doesn\'t match.');
            } else {
                toast.error('An error occurred while signing in. Please try again later.');
            }
        }
    }

    return (
        <div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mt-12">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" name="email" id="email" ref={emailRef} placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-rose-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input ref={passwordRef} type="password" name='password' id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-rose-600" />
                        <div className="flex justify-end text-xs text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-rose-600">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <SocialLogin />
                </div>
                <p className="text-xs text-center sm:px-6 text-gray-600">Don't have an account?
                    <Link to="/register" className="underline text-gray-800">Sign Up</Link>
                </p>
            </div>
            <ToastContainer /> {/* Toast notifications */}
        </div>
    );
};

export default Login;
