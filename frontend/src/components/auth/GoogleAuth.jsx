import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from '../../hooks/useAuth';

const GoogleAuth = () => {
    const { login } = useAuth();

    const onSuccess = (response) => {
        const { profileObj, tokenId } = response;
        login(profileObj, tokenId);
    };

    const onFailure = (response) => {
        console.error("Login failed: ", response);
    };

    return (
        <div className="flex justify-center items-center">
            <GoogleLogin
                clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default GoogleAuth;