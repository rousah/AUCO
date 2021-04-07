// loggingIn.js
import API from '../API';

export async function postLogin(user) {
    console.log("postLogin()");
    const token = await API.post(`/user/login`, user)
        .then(res => {
            return res.data;
        })
    return token;
}