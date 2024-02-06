import { POST, sGET, sGET_FETCH, sPOST, sPOST_FETCH, sPOST_FILE, sPUT, sDownloadFile } from '../protocol/HTTP';
import backendUrls from '../urls/backendUrls';

const UserService = {
  findAll: function (data, cb) {
    const url = backendUrls.Users.all;
    sGET(url, data, cb);
  },
  findOne: function (id, cb) {
    const url = backendUrls.Users.findOne + "/" + `${id}`;
    sGET(url, cb);
  },
  update:function(data,cb){
    const url = backendUrls.Users.update;
    sPUT(url,data,cb);
},
  changeUserRoleSimple: function (data, cb) {
    const url = backendUrls.Users.changeRole;
    sPOST(url, data, cb);
  },
  changeUserStatus: function (data, cb) {
    const url = backendUrls.Users.changeStatus;
    sPOST(url, data, cb);
  },



  //authentification routes
  createAccount: function (data, cbs, cbe) {
    const url = backendUrls.Authentication.register;
    POST(url, data, cbs, cbe);
  },
  create: function (data, cbs, cbe) {
    const url = backendUrls.Authentication.register;
    POST(url, data, cbs, cbe);
  },
  sentEmail: function (data, cbs, cbe) {
    console.log(data);
    const url = backendUrls.Authentication.sentEmail;
    POST(url, data, cbs, cbe);
  },
  sentEmailV2: function (data, cbs, cbe) {
    console.log(data);
    const url = backendUrls.Authentication.sentEmail+"/"+`${data}`;
    POST(url, cbs, cbe);
  },
  activateAccount: function (data, cbs, cbe) {
    const url = backendUrls.Authentication.activateAccount;
    POST(url, data, cbs, cbe);
  },
  tryPasswordReset: function (data, cbs, cbe) {
    const url = backendUrls.Authentication.tryResetPassword;
    POST(url, data, cbs, cbe);
  },
  checkPasswordResetToken: function (data, cbs, cbe) {
    const url = backendUrls.Authentication.checkResetPasswordToken;
    POST(url, data, cbs, cbe);
  },
  resetPassword: function (data, cbs, cbe) {
    const url = backendUrls.Authentication.resetPassword;
    POST(url, data, cbs, cbe);
  },
  resetPasswordV2: function (data,token, cbs, cbe) {
    const url = backendUrls.Authentication.resetPassword+"/"+`${token}`;
    POST(url, data, cbs, cbe);
  },
  login: function (data, cbs, cbe) {
    const url = backendUrls.Authentication.login;
    POST(url, data, cbs, cbe);
  },
  checkAdminOtp: function (data, cbs, cbe) {
    const url = backendUrls.Authentication.CONFIRM_ADMIN_IDENTITY;
    POST(url, data, cbs, cbe);
  },
  logout: function (cbs, cbe) {
    const url = backendUrls.Authentication.logout;
    //alert(getBearerAccessToken());
    sGET(url, cbs, cbe);
  },
  logoutAsync: async function () {
    const url = backendUrls.Authentication.logout;
    const { success, message } = await sGET_FETCH(url, []).then((r) =>
      r.json()
    );
    return { success: success, message: message };
  },
  resendActivationEmail(data, cbs, cbe) {
    const url = backendUrls.Authentication.resentActivationMail;
    sPOST(url, data, cbs, cbe);
  },
  updateInformation: function (id, data, cb) {
    const url = backendUrls.USER.updateInformations;
    sPUT(url, data, cb);
  },
  updatePassword: function (id, data, cb) {
    const url = backendUrls.USER.updatePassword;
    sPUT(url, data, cb);
  },
  refreshUser: async function () {
    const url = backendUrls.Authentication.userRefresh;
    const user = await sGET_FETCH(url).then((r) => r.json());
    return user;
  },

//   sentemail:function(data,cb){
// console.log(data)
//     const url = backendUrls.Authentication.sentEmail;
//     //POST(url,data,cb);
// },


};
export default UserService;