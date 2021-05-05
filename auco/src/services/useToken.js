import { useState } from 'react';

export default function useToken() {

    // Token

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

    // Id
    const getId = () => {
        const id = localStorage.getItem('user');
        return id;
    };

    const saveId = userId => {
        localStorage.setItem('user', userId);
        setId(userId);
    };

    const [userId, setId] = useState(getId());

    // Role
    const getRole = () => {
        const role = localStorage.getItem('role');
        return role;
    };

    const saveRole = userRole => {
        localStorage.setItem('role', userRole);
        setRole(userRole);
    };

    const [role, setRole] = useState(getRole());

    return {
        setToken: saveToken,
        setId: saveId,
        userId,
        isAuthenticated: isAuthenticated,
        deleteToken: deleteToken,
        token,
        setRole: saveRole,
        role
    }
}