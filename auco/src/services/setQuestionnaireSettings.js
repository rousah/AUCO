// setQuestionnaireSettings.js
import API from '../API';

export async function setQuestionnaireSettings(classid, form) {
    console.log("setQuestionnaireSettings()");
    const resp = await API.put(`/class/`+classid+`/update-formsettings`, form)
        .then(res => {
            console.log("Success setQuestionnaireSettings!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error in setQuestionnaireSettings!");
            console.log(err);
            return false;
        });
    return resp;
}