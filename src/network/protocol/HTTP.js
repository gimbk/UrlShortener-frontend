import { getBearerAccessToken } from '../auth/Auth';
//module.exports = {
const POST = function (url, data, cbs, cbe) {
    fetch(url, {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": JSON.stringify(data)
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        if (response.status === 401) {

        } else {
            console.log(response);
            console.log('Erreur: Impossible d\'accéder au serveur!');
        }

    }).then((responseJson) => {
        cbs(responseJson)
    }).catch(err => {
        cbs(null);
        if (cbe !== undefined && cbe !== null) cbe(err);
    });
};

const GET = function (url, cbs, cbe) {
    fetch(url, {
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json"
        }
    })
        .then((response) => {
            console.log('response', response)
            if (response.ok) {
                return response.json();
            }
            if (response.status === 401) {

            } else {
                console.log('Erreur: Impossible d\'accéder au serveur!');
            }

        }).then((responseJson) => {
            cbs(responseJson)
            //  return responseJson;
        }).catch(err => {
            cbs(null);
            if (cbe !== undefined && cbe !== null) cbe(err);
            console.log(err);
        });
};

const PUT = function (url, data, cbs, cbe) {
    fetch(url, {
        "method": "PUT",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": JSON.stringify(data)
    }).then((response) => {
        console.log('response', response)
        if (response.ok) {
            return response.json();
        }
        if (response.status === 401) {

        } else {
            console.log('Erreur: Impossible d\'accéder au serveur!');

        }

    }).then((responseJson) => {
        cbs(responseJson)
        //  return responseJson;
    }).catch(err => {
        cbs(null);
        if (cbe !== undefined && cbe !== null) cbe(err);
        console.log(err);
    });
};
const PATCH = function (url, data, cbs, cbe) {
    fetch(url, {
        "method": "PATCH",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": JSON.stringify(data)
    }).then((response) => {
        console.log('response', response)
        if (response.ok) {
            return response.json();
        }
        if (response.status === 401) {

        } else {
            console.log('Erreur: Impossible d\'accéder au serveur!');

        }

    }).then((responseJson) => {
        cbs(responseJson)
        //  return responseJson;
    }).catch(err => {
        cbs(null);
        if (cbe !== undefined && cbe !== null) cbe(err);
        console.log(err);
    });
};

const DELETE = function (url, cbs, cbe) {
    fetch(url, {
        "method": "DELETE",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json"
        }
    })
        .then((response) => {
            console.log('response', response)
            if (response.ok) {
                return response.json();
            }
            if (response.status === 401) {

            } else {
                console.log('Erreur: Impossible d\'accéder au serveur!');

            }

        }).then((responseJson) => {
            cbs(responseJson)
            //  return responseJson;
        }).catch(err => {
            cbs(null);
            if (cbe !== undefined && cbe !== null) cbe(err);
            console.log(err);
        });

};

// using Java Script method to get PDF file
const downloadFile=(url,fileName,data)=>{
    fetch(url, {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
        },
        "body": JSON.stringify(data)
    }).then(response => {
        response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = fileName;
        alink.click();
    })
});
};

const sPOST = function (url, data, cbs, cbe) {
    const token = getBearerAccessToken();
    fetch(url, {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "Authorization": "Bearer " + token
        },
        "body": JSON.stringify(data)
    })
        .then(response => {
            console.log(response)

            if (response.ok) {
                return response.json();
            }

            if (response.status === 401) {
                console.log('error message', response)
                //invalid token
                //log out user
                return response.json()
            } else {
                console.log("Impossible to contact server");
            }
        }).then((responseJson) => {
            cbs(responseJson)
            //  return responseJson;
        })

        .catch(err => {
            cbs(null);
            if (cbe !== undefined && cbe !== null) cbe(err);
            console.log(err);
        });
};

const sPOST_FILE = function (url, data, cbs, cbe) {
    const token = getBearerAccessToken();
    fetch(url, {
        "method": "POST",
        "headers": {
            "accept": "application/json",
            "Authorization": "Bearer " + token
        },
        "body": data
    })
        .then(response => {
            console.log(response)

            if (response.ok) {
                return response.json();
            }

            if (response.status === 401) {
                console.log('error message', response)
                //invalid token
                //log out user
                return response.json()
            } else {
                console.log("Impossible to contact server");
            }
        }).then((responseJson) => {
            cbs(responseJson)
            //  return responseJson;
        })

        .catch(err => {
            cbs(null);
            if (cbe !== undefined && cbe !== null) cbe(err);
            console.log(err);
        });
};

const sPUT = function (url, data, cbs, cbe) {
    const token = getBearerAccessToken();
    fetch(url, {
        "method": "PUT",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "Authorization": "Bearer " + token
        },
        "body": JSON.stringify(data)
    })
        .then(response => {
            console.log(response)

            return response.json();
            // if (response.ok) {
            //     return response.json();
            // }
            //
            // if (response.status === 401) {
            //     console.log('error message', response)
            //     //invalid token
            //     //log out user
            //     return response.json()
            // } else {
            //     console.log("Impossible to contact server");
            // }
        }).then((responseJson) => {
            cbs(responseJson)
            //  return responseJson;
        })

        .catch(err => {
            cbs(null);
            if (cbe !== undefined && cbe !== null) cbe(err);
            console.log(err);
        });
};

const sGET = function (url, cbs, cbe) {
    const token = getBearerAccessToken();
    fetch(url, {
        "method": "GET",
        "headers": {
            "accept": "application/json",
            "Authorization": "Bearer " + token
        }
        
    })
        .then(response => {
            console.log(response)
            console.log("status de la reponse est "+response.status);
            if (response.ok) {
                return response.json();
            }

            if (response.status === 401) {
                console.log('error message', response)
                //invalid token
                //log out user
                return response.json()
            } else {
                console.log("Impossible to contact server");
            }
        }).then((responseJson) => {
            cbs(responseJson)
            //  return responseJson;
        })

        .catch(err => {
            cbs(null);
            if (cbe !== undefined && cbe !== null) cbe(err);
            console.log(err);
        });
};

const sPATCH = function (url, data, cbs, cbe) {
    const token = getBearerAccessToken();
    fetch(url, {
        "method": "PATCH",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "Authorization": "Bearer " + token
        },
        "body": JSON.stringify(data)
    }).then((response) => {
        console.log('response', response)
        if (response.ok) {
            return response.json();
        }
        if (response.status === 401) {

        } else {
            console.log('Erreur: Impossible d\'accéder au serveur!');

        }

    }).then((responseJson) => {
        cbs(responseJson)
        //  return responseJson;
    }).catch(err => {
        cbs(null);
        if (cbe !== undefined && cbe !== null) cbe(err);
        console.log(err);
    });
};

const sDELETE = function (url, cbs, cbe) {
    const token = getBearerAccessToken();
    fetch(url, {
        "method": "DELETE",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "Authorization": "Bearer " + token
        }
    })
        .then((response) => {
            console.log('response', response)
            if (response.ok) {
                return response.json();
            }
            if (response.status === 401) {

            } else {
                console.log('Erreur: Impossible d\'accéder au serveur!');
                return {status:false};
            }

        }).then((responseJson) => {
            cbs(responseJson)
            //  return responseJson;
        }).catch(err => {
            cbs(null);
            if (cbe !== undefined && cbe !== null) cbe(err);
            console.log(err);
        });

};

// using Java Script method to get PDF file
const sDownloadFile=(url,fileName,data)=>{
    const token = getBearerAccessToken();
    fetch(url, {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "Authorization": "Bearer " + token
        },
        "body": JSON.stringify(data)
    }).then(response => {
        response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = fileName;
        alink.click();
    })
});
};

const pGET = function (url, cbs, cbe) {
    fetch(url, {
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "accept": "application/ld+json"
        }
    })
        .then((response) => {
            console.log('response', response)
            if (response.ok) {
                return response.json();
            }
            if (response.status === 401) {

            } else {
                console.log('Erreur: Impossible d\'accéder au serveur!');

            }

        }).then((responseJson) => {
            cbs(responseJson)
            //  return responseJson;
        }).catch(err => {
            cbs(null);
            if (cbe !== undefined && cbe !== null) cbe(err);
            console.log(err);
        });

};

const spGET = function (url, cbs, cbe) {
    const token = getBearerAccessToken();
    fetch(url, {
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "accept": "application/ld+json",
            "Authorization": "Bearer " + token
        }
    })
        .then((response) => {
            console.log('response', response)
            if (response.ok) {
                return response.json();
            }
            if (response.status === 401) {

            } else {
                console.log('Erreur: Impossible d\'accéder au serveur!');

            }

        }).then((responseJson) => {
            cbs(responseJson)
            //  return responseJson;
        }).catch(err => {
            cbs(null);
            if (cbe !== undefined && cbe !== null) cbe(err);
            console.log(err);
        });

};

const upPOST = function (url, data, cbs, cbe) {
    fetch(url, {
        "method": "POST",
        /* "headers": {
             "content-type": "application/json",
             "accept": "application/json",
             "type": "formData"
         },*/
        "body": data
    }).then((response) => {
        console.log('response', response)
        if (response.ok) {
            console.log("success");
            return response.json();
        }
        if (response.status === 401) {

        } else {
            console.log('Erreur: Impossible d\'accéder au serveur!');

        }

    }).then((responseJson) => {
        console.log("successJson");
        console.log(responseJson);
        cbs(responseJson)
        //  return responseJson;
    }).catch(err => {
        cbs(null);
        if (cbe !== undefined && cbe !== null) cbe(err);
        console.log(err);
    });
};



const supPOST = function (url, data, cbs, cbe) {
    const token = getBearerAccessToken();
    fetch(url, {
        "method": "POST",
        "headers": {
            "Authorization": "Bearer " + token
        },
        /* "headers": {
             "content-type": "application/json",
             "accept": "application/json",
             "type": "formData"
         },*/
        "body": data
    }).then((response) => {
        console.log('response', response)
        if (response.ok) {
            console.log("success");
            return response.json();
        }
        if (response.status === 401) {

        } else {
            console.log('Erreur: Impossible d\'accéder au serveur!');

        }

    }).then((responseJson) => {
        console.log("successJson");
        console.log(responseJson);
        cbs(responseJson)
        //  return responseJson;
    }).catch(err => {
        cbs(null);
        if (cbe !== undefined && cbe !== null) cbe(err);
        console.log(err);
    });
};


const upPUT = function (url, data, cbs, cbe) {
    fetch(url, {
        "method": "POST",
        /* "headers": {
             "content-type": "application/json",
             "accept": "application/json"
         },*/
        "body": data
    }).then((response) => {
        console.log('response', response)
        if (response.ok) {
            return response.json();
        }
        if (response.status === 401) {

        } else {
            console.log('Erreur: Impossible d\'accéder au serveur!');

        }

    }).then((responseJson) => {
        cbs(responseJson)
        //  return responseJson;
    }).catch(err => {
        cbs(null);
        if (cbe !== undefined && cbe !== null) cbe(err);
        console.log(err);
    });
};

const supPUT = function (url, data, cbs, cbe) {
    const token = getBearerAccessToken();
    fetch(url, {
        "method": "POST",
        "headers": {
            "Authorization": "Bearer " + token
        },
        /* "headers": {
             "content-type": "application/json",
             "accept": "application/json"
         },*/
        "body": data
    }).then((response) => {
        console.log('response', response)
        if (response.ok) {
            return response.json();
        }
        if (response.status === 401) {

        } else {
            console.log('Erreur: Impossible d\'accéder au serveur!');

        }

    }).then((responseJson) => {
        cbs(responseJson)
        //  return responseJson;
    }).catch(err => {
        cbs(null);
        if (cbe !== undefined && cbe !== null) cbe(err);
        console.log(err);
    });
};

const sPOST_FETCH = (url, data) => {
    const token = getBearerAccessToken();
    return fetch(url, {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "Authorization": "Bearer " + token
        },
        "body": JSON.stringify(data)
    });
};

const sGET_FETCH = (url) => {
    const token = getBearerAccessToken();
    return fetch(url, {
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "Authorization": "Bearer " + token
        },
    });
};
const formDataPOST_FETCH = (url, data) => {
    
    return fetch(url, {
        "method": "POST",
        "credentials": "include",
       /* "headers": {
            "type": "formData"
        },*/
        "body": data
    });
};
export {
    POST,
    PATCH,
    GET,
    PUT,
    DELETE,
    sPOST,
    sGET,
    sPATCH,
    sPUT,
    sDELETE,
    pGET,
    upPOST,
    upPUT,
    sGET_FETCH,
    sPOST_FETCH,
    sPOST_FILE,
    spGET,
    supPOST,
    supPUT,
    formDataPOST_FETCH,
    downloadFile,
    sDownloadFile
};