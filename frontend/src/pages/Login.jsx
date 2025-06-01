import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { loginUser } from '../services/auth';

const Login = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onSuccess = async (response) => {
        try {
            await loginUser(response.tokenId);
            navigate('/dashboard');
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    };

    const onFailure = (response) => {
        setError('Login failed. Please try again.');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Login with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    );
};

export default Login;