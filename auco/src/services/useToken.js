import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        return tokenString;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', userToken);
        setToken(userToken);
    };

    const deleteToken = () => {
        console.log("deleteToken")
        localStorage.removeItem('token');
    }

    const isAuthenticated = () => {
        if (getToken() != null) return true;
        return false;
    };

    return {
        setToken: saveToken,
        isAuthenticated: isAuthenticated,
        deleteToken: deleteToken,
        token
    }
}