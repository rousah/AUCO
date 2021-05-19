// getStudent.js
import API from '../API';

export async function getStudent(id) {
    console.log("getStudent()");
    const token = await API.get(`/student/`+id)
        .then(res => {
            console.log("Success receiving student!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error in reception of student!");
            console.log(err);
            return false;
        });
    return token;
}