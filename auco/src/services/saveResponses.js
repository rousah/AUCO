// saveResponses.js
import API from '../API';

export async function saveResponses(answers) {
    console.log("saveResponses()");
    const response = await API.post(`/student/responses/create`, answers)
        .then(res => {
            console.log("Success saving reponses!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error in saving of responses!");
            console.log(err);
            return false;
        });
    return response;
}