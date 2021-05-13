// getClass.js
import API from '../API';

export async function getClass(id) {
    console.log("getClass()");
    const token = await API.get(`/class/`+id)
        .then(res => {
            console.log("Success receiving class!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error in reception of class!");
            console.log(err);
            return false;
        });
    return token;
}