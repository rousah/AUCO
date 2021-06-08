// getQuestionnaire.js
import API from '../API';

export async function getQuestionnaire(id) {
    console.log("getQuestionnaire()");
    const questions = await API.get(`/questionnaire/`+id)
        .then(res => {
            console.log("Success receiving questionnaire!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error in reception of questionnaire!");
            console.log(err);
            return false;
        });
    return questions;
}