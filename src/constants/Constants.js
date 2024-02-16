/*
*   This file is to define constants value that will be used inside the code
*
*
* */

// This regex is for controlling the input email. This first one will be absolutely used in production
//export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//This regex is for controlling the input email. This first one will be exclusively used in test environment
export const EMAIL_REGEX = /^\w+([\.-]?\S+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// This regex is to control the strength of a password
export const PASSWORD_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
export const CHECKPWD = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
export const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
export const uppercaseRegex = /[A-Z]/;
export const lowercaseRegex = /[a-z]/;
export const digitRegex = /[0-9]/;
export const onlineUrl= "https://url-8b9l.onrender.com";
export const localUrl= "http://127.0.0.1:9000";
export const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;


const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
export const year = day * 365;