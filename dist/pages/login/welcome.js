"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_modal=require("./../../components/modal.js"),_modal2=_interopRequireDefault(_modal),_modalUser=require("./../../components/modalUser.js"),_modalUser2=_interopRequireDefault(_modalUser),_http=require("./../../http.js"),_util=require("./../../util.js"),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_user=require("./../../store/actions/user.js"),_contant=require("./../../store/actions/contant.js"),_user2=require("./../../store/types/user.js"),store=(0,_wepyRedux.getStore)(),Welcome=function(e){function t(){var e,i,o,n;_classCallCheck(this,t);for(var s=arguments.length,a=Array(s),r=0;r<s;r++)a[r]=arguments[r];return i=o=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.$repeat={},o.$props={modal:{"xmlns:v-bind":"","v-bind:isScaleModal.sync":"isModal","v-bind:height.sync":"modalHeight","v-bind:modalObj.sync":"modalObj"},modalogin:{"v-bind:isScaleModal.sync":"isLoginModal","v-bind:type.sync":"type",bindhandleClose:"handleClose",bindhandleOkLogin:"handleOkLogin","v-bind:height.sync":"modalLoginHeight"}},o.$events={},o.components={modal:_modal2.default,modalogin:_modalUser2.default},o.data={userInfo:null,isModal:!0,modalHeight:640,modalObj:{title:"",subTitle:"",imgBg:"https://a.rsd123.com/image/images/modalIcon.png"},checked:!1,isView:!0,authorize:!1,isRead:!1,isLoginModal:!0,type:1,modalLoginHeight:400,openid:"",code:"",sessionKey:"",isInviteUser:!1,teamId:"",rendaUidQrcode:"",uid:"",isLoginOut:!1,isHandleBtn:!1},o.config={enablePullDownRefresh:!0},o.events={handleOk:function(){o.isModal=!o.isModal,o.$apply()},handleOkLogin:function(e){if(e){if("object"===(void 0===e?"undefined":_typeof(e)))if(wx.getStorageSync("wxphoneNumber")){var t=wx.getStorageSync("wxphoneNumber");o.getWxPhoneLogin(t)}else o.getWxPhone(e);else(0,_util.wxNavigateTo)("/pages/login/login");o.isLoginModal=!o.isLoginModal,o.$apply()}},handleClose:function(){o.isLoginModal=!o.isLoginModal,o.$apply()}},o.methods={checkedRule:function(e){this.checked=!this.checked,this.checked?(0,_util.wxReLaunch)("/pages/login/rule"):this.isRead=!1,this.$apply()},router:function(){(0,_util.wxReLaunch)("/pages/login/rule")},getUserInfo:function(e){var t=this;if(this.isRead){if(6100===this.code&&""!=this.teamId)return this.isLoginModal=!this.isLoginModal,void this.$apply();if(!this.isView)return void this.showErrorTip(this.code);if(this.userInfo=e.detail.userInfo,this.userInfo){this.isHandleBtn=!0;var i={head_img:this.userInfo.avatarUrl,address:this.userInfo.province+this.userInfo.city,user_name:this.userInfo.nickName};this.$parent.globalData.wxInfo=i,this.isInviteUser&&(this.isLoginModal=!1),wx.setStorageSync("wxInfo",JSON.stringify(i)),this.authorize=!0,this.$apply(),this.openid||(this.openid=this.$parent.getOpenId()),this.checkUserLogin(this.openid)}else wx.showModal({title:"警告",content:"您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!",showCancel:!1,confirmText:"返回授权",success:function(e){e.confirm&&(t.authorize=!1,t.isLoginModal=!0,t.$apply())}})}}},n=i,_possibleConstructorReturn(o,n)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){var t=this;this.rendaUidQrcode=wx.getStorageSync("rendaUidQrcode")||this.$parent.globalData.rendaUidQrcode,this.teamId=wx.getStorageSync("rendaUserTeamId")||this.$parent.globalData.teamId,this.rendaUidQrcode&&this.teamId?(this.isLoginOut=!1,this.isInviteUser=!0):this.isInviteUser=!1,e&&e.query?"loginout"==e.query?this.isLoginOut=!0:(this.checked=e.query,this.isRead=!0):(this.isRead=!1,this.isLoginOut=!1),this.openid=wx.getStorageSync("rendaOpenId")||this.$parent.globalData.openid,this.$apply(),wx.getSetting({success:function(e){e.authSetting["scope.userInfo"]?(t.authorize=!0,t.openid||(t.openid=t.$parent.getOpenId()),t.checkUserLogin(t.openid)):(t.authorize=!1,t.openid||(t.openid=t.$parent.getOpenId())),t.$apply()}})}},{key:"onShow",value:function(){this.isRead||(this.checked=!1,this.$apply())}},{key:"onPullDownRefresh",value:function(){this.openid&&this.checkUserLogin(this.openid)}},{key:"checkQrcode",value:function(e){var t=this,i={uid:e.uid,team_id:this.rendaUidQrcode,invite_uid:this.teamId};(0,_http.$http)("/userinfo/checkbindTeam",i).then(function(i){0==i.data.is_bond&&0==i.data.effect?(t.isLoginModal=!1,t.$apply()):1==i.data.is_bond?((0,_util.wxToast)("已有团队，不需要加入"),t.viewRouter(e)):(0,_util.wxToast)("二维码已经失败")})}},{key:"checkUserLogin",value:function(e){var t=this,i={};i=this.isInviteUser?{openid:e,type:2}:{openid:e},store.dispatch((0,_user.getAllUser)(i)).then(function(e){t.isView=!0,t.$apply(),t.checkRouterView(e.payload)}).catch(function(e){e&&e.code&&(t.code=e.code,t.isView=!1,6100==t.code&&t.authorize&&t.isHandleBtn&&t.isRead&&(t.isLoginModal=!1),6100===t.code&&t.authorize&&t.isRead&&t.isLoginOut&&(t.isLoginModal=!1),t.$apply())})}},{key:"checkRouterView",value:function(e){e&&e.uid&&(this.$parent.globalData.uid=e.uid,this.uid=e.uid,this.isRead=!0,this.checked=!0,this.$apply(),wx.setStorageSync("rendaUid",e.uid),this.isInviteUser?(wx.setStorageSync("rendaUserType",2),this.checkQrcode(e)):(wx.setStorageSync("rendaUserType",e.usertype),this.viewRouter(e)),store.dispatch((0,_contant.getAllContant)()))}},{key:"viewRouter",value:function(e){e.usertype?2===Number(e.usertype)?0!==Number(e.is_team)?(0,_util.wxReLaunch)("/pages/teamView/index"):(0,_util.wxReLaunch)("/pages/register/selectUser?query=1"):1===Number(e.usertype)?0!==Number(e.is_company)?(0,_util.wxReLaunch)("/pages/companyView/index"):(0,_util.wxReLaunch)("/pages/register/companyForm"):(0,_util.wxReLaunch)("/pages/message/index"):(0,_util.wxReLaunch)("/pages/register/selectUser")}},{key:"showErrorTip",value:function(e){if(6100===e)return this.isLoginModal=!1,void this.$apply();var t=(0,_util.getErrorTip)(e);this.modalHeight=6001===e||6008===e?640:580,this.modalObj.title=t.title,this.modalObj.subTitle=t.subTitle,this.isModal=!1,this.isView=!1,this.$apply()}},{key:"getWxPhone",value:function(e){var t=this;(0,_http.$http)("/login/decryptData",e).then(function(e){e&&e.data&&(wx.setStorageSync("wxphoneNumber",e.data.phoneNumber),t.getWxPhoneLogin(e.data.phoneNumber))})}},{key:"getWxPhoneLogin",value:function(e){var t=this;this.openid||(this.openid=this.$parent.getOpenId());var i={tel:e,openid:this.openid};this.isInviteUser&&(i.type=2),(0,_http.$http)("/login/is_register_auto",i).then(function(i){if(t.isRead=!0,t.checked=!0,wx.setStorageSync("rendaUid",i.data.uid),t.isInviteUser){var o={teamId:t.teamId,invite_uid:t.rendaUidQrcode,tel:e,uid:i.data.uid};(0,_util.wxNavigateTo)("/pages/teamView/userInfo?query="+JSON.stringify(o))}else t.checkRouterView(i.data);store.dispatch({type:_user2.GETALLUSER,payload:i.data})}).catch(function(e){e&&e.status&&e.status.code&&(t.authorize&&(t.isLoginModal=!1),t.code=e.status.code,t.$apply(),t.showErrorTip(t.code))})}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Welcome,"pages/login/welcome"));