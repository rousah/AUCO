// createClass.js
import API from '../API';

export async function postClass(newClass) {
    console.log("postClass()");
    const token = await API.post(`/class/create`, newClass)
        .then(res => {
            console.log("Success creating class!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error in creation of class!");
            console.log(err);
            return false;
        });
    return token;
}