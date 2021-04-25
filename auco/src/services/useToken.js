import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        return tokenString;
    };

    const saveToken = userToken => {
        localStorage.setItem('token', userToken);
        setToken(userToken);
    };

    const deleteToken = () => {
        console.log("deleteToken")
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    const isAuthenticated = () => {
        if (getToken() != null) return true;
        return false;
    };

    const [token, setToken] = useState(getToken());

    const getId = () => {
        const id = localStorage.getItem('user');
        return id;
    };

    const saveId = userId => {
        localStorage.setItem('user', userId);
        setId(userId);
    };

    const [userId, setId] = useState(getId());

    return {
        setToken: saveToken,
        setId: saveId,
        userId,
        isAuthenticated: isAuthenticated,
        deleteToken: deleteToken,
        token
    }
}