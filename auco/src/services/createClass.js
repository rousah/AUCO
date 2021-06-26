// createClass.js
import API from '../API';
var FileSaver = require('file-saver');

export async function postClass(newClass) {
    console.log("postClass()");
    const token = await API.post(`/class/create`, newClass, { responseType: 'arraybuffer' })
        .then(res => {
            console.log("Success creating class!");
            var blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            FileSaver.saveAs(blob, 'usuarios-estudiantes.xlsx');
            return true;
        })
        .catch((err) => {
            console.log("Error in creation of class!");
            console.log(err);
            return false;
        });
    return token;
}