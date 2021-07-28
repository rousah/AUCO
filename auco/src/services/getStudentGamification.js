// getStudentGamification.js
import API from '../API';

export async function getStudentGamification(id) {
    console.log("getStudentGamification()");
    const studentGamification = await API.get(`/student/gamification/`+id)
        .then(res => {
            console.log("Success receiving student gamification!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error in reception of student gamification!");
            console.log(err);
            return false;
        });
    return studentGamification;
}