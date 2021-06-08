// deleteClass.js
import API from '../API';

export async function deleteClass(classId) {
    console.log("deleteClass()");
    const response = await API.delete(`/class/delete/` + classId)
        .then(res => {
            console.log("Success deleting class!");
            console.log(res.data);
            return true;
        })
        .catch((err) => {
            console.log("Error in deletion of class!");
            console.log(err);
            return false;
        });
    return response;
}