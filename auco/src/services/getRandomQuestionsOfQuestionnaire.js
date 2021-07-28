// getRandomQuestionsOfQuestionnaire.js
import API from '../API';

export async function getRandomQuestionsOfQuestionnaire(idq, ids) {
    console.log("getRandomQuestionsOfQuestionnaire()");
    const questions = await API.get(`/questionnaire/` + idq + `/random/`+ ids)
        .then(res => {
            console.log("Success receiving random questionnaire questions!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error in reception of random questionnaire questions!");
            console.log(err);
            return false;
        });
    return questions;
}