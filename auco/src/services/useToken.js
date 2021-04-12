import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        return tokenString?.token
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

    return {
        setToken: saveToken,
        deleteToken: deleteToken,
        token
    }
}