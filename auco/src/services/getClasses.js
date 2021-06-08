// getClasses.js
import API from '../API';

export async function getClasses(id) {
    console.log("getClasses()");
    const token = await API.get(`/class/classes/`+id.userId)
        .then(res => {
            console.log("Success receiving classes!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error in reception of classes!");
            console.log("Error: " + err);
            return false;
        });
    return token;
}