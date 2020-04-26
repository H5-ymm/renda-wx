"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function _inherits(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,a){for(var t=0;t<a.length;t++){var o=a[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(a,t,o){return t&&e(a.prototype,t),o&&e(a,o),a}}(),_wepy=require("./npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy);require("./utils.js"),require("./npm/lodash/lodash.js"),require("./npm/wepy-async-function/index.js");var _wepyRedux=require("./npm/wepy-redux/lib/index.js"),_store=require("./store/index.js"),_store2=_interopRequireDefault(_store),_http=require("./http.js"),store=(0,_store2.default)();(0,_wepyRedux.setStore)(store);var _default=function(e){function a(){_classCallCheck(this,a);var e=_possibleConstructorReturn(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.config={pages:["pages/login/welcome","pages/teamView/index","pages/my/index","pages/companyView/index","pages/companyView/addStaff","pages/home/index","pages/message/index","pages/teamView/orderManage/index","pages/teamView/userList","pages/teamView/userInfo","pages/teamView/qrCodeUser","pages/home/list","pages/message/dialogBox","pages/message/personalDialogBox","pages/home/resumeDetail","pages/home/qrCodeResume","pages/home/addInfo","pages/my/userInfo","pages/my/companyInfo","pages/my/teamInfo","pages/my/userBind","pages/teamView/cityView","pages/teamView/department/index","pages/teamView/orderManage/list","pages/teamView/orderManage/viewResumeList","pages/teamView/internalInvoice/list","pages/teamView/internalInvoice/teamJobDetail","pages/teamView/internalInvoice/insiderJobDetail","pages/teamView/orderManage/allocationPerson","pages/teamView/department/userSetting","pages/register/selectUser","pages/companyView/staffManage","pages/companyView/checkReceipt","pages/companyView/checkTeam","pages/companyView/resumeSiftings","pages/companyView/checkResumeList","pages/companyView/viewResult","pages/companyView/checkResumeDetail","pages/companyView/noticeRecord","pages/companyView/teamDetail","pages/companyView/jobDetail","pages/companyView/viewJob","pages/companyView/ceateList","pages/companyView/ceateMoreList","pages/register/companyTeam","pages/register/companyForm","pages/register/team","pages/login/rule","pages/login/login"],window:{navigationBarTextStyle:"white",navigationBarTitleText:"人事达",navigationBarBackgroundColor:"#1890FF",backgroundColor:"#1890FF"},networkTimeout:{request:1e4,connectSocket:1e4,uploadFile:1e4,downloadFile:1e4}},e.globalData={headerHeight:0,statusBarHeight:0,userInfo:null,uid:"",openid:"",wxInfo:"",rendaUidQrcode:"",sessionKey:"",teamId:"",list:[{pagePath:"/pages/home/index",text:"简历列表",selected:!0,iconPath:"../images/list.png",selectedIconPath:"../images/list-active.png"},{pagePath:"/pages/my/index",text:"我的",selected:!1,iconPath:"../images/my.png",selectedIconPath:"../images/my-active.png"}],tabBar:{color:"#999999",selectedColor:"#1890FF",borderStyle:"white",list:[]}},e.use("promisify"),e.use("requestfix"),wx.getStorageSync("wxInfo")||wx.getUserInfo({success:function(a){var t={head_img:a.userInfo.avatarUrl,address:a.userInfo.province+a.userInfo.city,user_name:a.userInfo.nickName};e.globalData.wxInfo=t,wx.setStorageSync("wxInfo",JSON.stringify(t))}}),e}return _inherits(a,e),_createClass(a,[{key:"onLaunch",value:function(e){this.removeData(),this.autoUpdate(),this.isCheckSession(),wx.loadFontFace({family:"PingFangSC-Medium",source:'url("https://www.your-server.com/PingFangSC-Medium.ttf")',success:function(){console.log("load font success")}})}},{key:"removeData",value:function(){wx.removeStorageSync("preForm"),wx.removeStorageSync("resumeType"),wx.removeStorageSync("sendAuthCode"),wx.removeStorageSync("preForm")}},{key:"onShow",value:function(e){wx.removeStorageSync("rendaUidQrcode"),wx.removeStorageSync("rendaUserTeamId");var a="",t="",o=decodeURIComponent(e.scene);console.log(e.scene),console.log(o+"场景值"),a=o.split("&")[0],t=o.split("&")[1],t?(this.globalData.rendaUidQrcode=a,wx.setStorageSync("rendaUidQrcode",a),"addResume"!=t&&(this.globalData.teamId=t,wx.setStorageSync("rendaUserTeamId",t))):(wx.setStorageSync("rendaUidQrcode",""),wx.setStorageSync("rendaUserTeamId","")),e.query&&e.query.uid&&(wx.setStorageSync("rendaUidQrcode",e.query.uid),this.globalData.rendaUidQrcode=e.query.uid,e.query.teamId&&(this.globalData.teamId=e.query.teamId,wx.setStorageSync("rendaUserTeamId",e.query.teamId)))}},{key:"autoUpdate",value:function(){var e=this;if(wx.canIUse("getUpdateManager")){var a=wx.getUpdateManager();a.onCheckForUpdate(function(t){t.hasUpdate&&wx.showModal({title:"更新提示",content:"检测到新版本，是否下载新版本并重启小程序？",success:function(t){t.confirm?e.downLoadAndUpdate(a):t.cancel&&wx.showModal({title:"温馨提示~",content:"本次版本更新涉及到新的功能添加，旧版本无法正常访问的哦~",showCancel:!1,confirmText:"确定更新",success:function(t){t.confirm&&e.downLoadAndUpdate(a)}})}})})}else wx.showModal({title:"提示",content:"当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"})}},{key:"downLoadAndUpdate",value:function(e){wx.showLoading(),e.onUpdateReady(function(){wx.hideLoading(),e.applyUpdate()}),e.onUpdateFailed(function(){wx.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})})}}]),_createClass(a,[{key:"tabBarClickHandle",value:function(e,a){var t=this.globalData.tabBar.list;return t.forEach(function(a,o){e===o?t[e].selected=!0:t[o].selected=!1}),a.$apply(),this.globalData.tabBar}},{key:"isCheckSession",value:function(){var e=this;wx.checkSession({success:function(){console.log("没有过期")},fail:function(){e.getOpenId()}})}},{key:"getOpenId",value:function(){var e=this,a="";return wx.login({success:function(t){t.code?(0,_http.$http)("/Login/getopenid",{code:t.code}).then(function(t){var o=JSON.parse(t.data);e.globalData.openid=o.openid,a=o.openid,e.globalData.sessionKey=o.session_key,wx.setStorageSync("session_key",o.session_key),wx.setStorageSync("rendaOpenId",o.openid)}).catch(function(e){console.log(e)}):(console.log(1),console.log("获取失败！"+t.errMsg))}}),console.log(a),a}}]),a}(_wepy2.default.app);App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default,{baseUrl:"https://a.rsd123.com/",noPromiseAPI:["createSelectorQuery"]}));