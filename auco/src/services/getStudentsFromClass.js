// getStudentsFromClass.js
import API from '../API';

export async function getStudentsFromClass(id) {
    console.log("getStudentsFromClass()");
    const students = await API.get(`/student/class/`+id)
        .then(res => {
            console.log("Success receiving students from class " + id + "!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error in reception of students from class!");
            console.log(err);
            return false;
        });
    return students;
}