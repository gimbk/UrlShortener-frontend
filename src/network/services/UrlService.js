import { POST, sGET, sGET_FETCH, sPOST, sPOST_FETCH,sDELETE, sPUT, sDownloadFile, GET } from '../protocol/HTTP';
import backendUrls from '../urls/backendUrls';

const UrlService ={
    findAll: function(cb){
        const url = backendUrls.Url.all;
        sGET(url,cb);
    },
    shorten: function(data,cb){
        const url = backendUrls.Url.shorten;
        POST(url,data,cb);
    },
    findOneUrl: function(data,cb){
        const url = backendUrls.Url.findOne;
        POST(url,data,cb);
    },
    longen: function(shortUrl,cb){
        const url = backendUrls.Url.longen+"/"+`${shortUrl}`;
        GET(url,cb);
    },
    delete:function(id,cb){
        const url = backendUrls.Url.delete+"/"+`${id}`;
        sDELETE(url,cb);
        
    },
    update:function(id,data,cb){
        const url = backendUrls.Url.update;
        sPUT(url,data,cb);
        
    },
    findOne: function(id,cb){
        const url = backendUrls.Url.findOne+"/"+`${id}`;
        sGET(url,cb);
    },

}



export default UrlService;

