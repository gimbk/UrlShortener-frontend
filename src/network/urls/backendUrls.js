//const apiUrl = 'http://127.0.0.1:9002/api';
const apiUrl= 'https://url-8b9l.onrender.com';
const authApiUrl = 'http://127.0.0.1:9000';
const apiUrlSecure = 'http://127.0.0.1:9001/api';
export const MEDIA_URL = apiUrl + "/uploads/";
const backendsUrls = {
    Url: {
        all: apiUrl + "/api/url/all",
        findOne: apiUrl + "/api/url/check",
        update: apiUrl + "/api/url/update",
        delete: apiUrl + "/api/url/delete/",
        shorten: apiUrl + "/api/url/shorten",
        longen: apiUrl + "/api/url/",
    },
}
export default backendsUrls;