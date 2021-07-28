// sendReport.js
import API from '../API';

export async function postReport(report, id) {
    console.log("postReport()");
    const notif = await API.post(`/class/`+id+`/create-report`, report)
        .then(res => {
            console.log("Success creating report!");
            return res.data;
        })
        .catch((err) => {
            console.log("Error in creation of report!");
            console.log(err);
            return false;
        });
    return notif;
}