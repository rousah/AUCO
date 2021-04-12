// loggingIn.js
import API from '../API';

export async function postLogin(user) {
    console.log("postLogin()");
    const token = await API.post(`/user/login`, user)
        .then(res => {
            console.log("Success logging in!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error in log in!");
            console.log(err);
            return false;
        });
    return token;
}