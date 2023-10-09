import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
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
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <h1>Loading .....</h1>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (

        // <div className=' register-form  container bg-login mx-auto p-5 mt-5'>
        //     <h2 className='text-primary  mt-2 mb-5 text-center'>Please Login</h2>
        //     <Form onSubmit={handleSubmit} className='login-form'>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Control ref={emailRef} type="email" placeholder="Enter email" className='w-100' required />
        //         </Form.Group>
        //         <Form.Group className="mb-3" controlId="formBasicPassword">
        //             <Form.Control ref={passwordRef} type="password" placeholder="Password" className='w-100' required />
        //         </Form.Group>
        //         <Button variant="primary w-100  d-block mb-2" type="submit">
        //             Login
        //         </Button>
        //     </Form>
        //     {errorElement}
        //     <p className='text-center'>New Here? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
        //     <p className='text-center'>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
        //     <SocialLogin></SocialLogin>
        //     <ToastContainer />
        // </div>

        <div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mt-12">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit} novalidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block text-gray-600">Email</label>
                        <input type="email" name="email" id="email" ref={emailRef} placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-rose-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block text-gray-600">Password</label>
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
        </div>

    );
};

export default Login;