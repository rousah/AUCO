// getRandomQuestion.js
import API from '../API';

export async function getRandomQuestion() {
    console.log("getRandomQuestion()");
    const questions = await API.get(`/questionnaire/get/random-question/`)
        .then(res => {
            console.log("Success receiving one random questionnaire question!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error in reception of one random questionnaire question!");
            console.log(err);
            return false;
        });
    return questions;
}