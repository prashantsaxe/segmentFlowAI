import { useState, useEffect } from 'react';
import { getUser, login, logout } from '../services/auth';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await getUser();
            setUser(currentUser);
            setLoading(false);
        };

        fetchUser();
    }, []);

    const handleLogin = async () => {
        const loggedInUser = await login();
        setUser(loggedInUser);
    };

    const handleLogout = async () => {
        await logout();
        setUser(null);
    };

    return {
        user,
        loading,
        handleLogin,
        handleLogout,
    };
};

export default useAuth;