import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;

    if (loading || loading1) {
        return <h1>Loading....</h1>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/');
    }

    return (
        <div className=''>
            <div className='d-flex align-items-center'>

            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary text-warning fs-3 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src='' alt="" />
                    <span className=''><i class="fa-brands fa-google"></i></span>
                </button>


            </div>
        </div>
    );
};

export default SocialLogin;