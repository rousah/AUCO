// savePoints.js
import API from '../API';

export async function savePoints(id, points) {
    console.log("savePoints()");
    const response = await API.put(`/class/student/`+id+`/points`, {points: points})
        .then(res => {
            console.log("Success saving points!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error in saving of points!");
            console.log(err);
            return false;
        });
    return response;
}