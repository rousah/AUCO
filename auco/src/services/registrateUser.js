// registrateUser.js
import API from '../API';

export async function postRegister(user) {
    console.log("postRegister()");
    const token = await API.post(`/user/register`, user)
        .then(res => {
            console.log("Success creating user!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error creating user!");
            console.log(err);
            return false;
        });
    return token;
}