//const apiUrl = 'http://127.0.0.1:9002/api';
const apiUrl= 'https://url-8b9l.onrender.com';
const authApiUrl = 'http://127.0.0.1:9000';
const apiUrlSecure = 'http://127.0.0.1:9001/api';
export const MEDIA_URL = apiUrl + "/uploads/";
const backendsUrls = {
    Url: {
        all: apiUrl + "/url/all",
        findOne: apiUrl + "/url/check",
        update: apiUrl + "/url/update",
        delete: apiUrl + "/url/delete/",
        shorten: apiUrl + "/url/shorten",
        longen: apiUrl + "/url/",
    },
}
export default backendsUrls;