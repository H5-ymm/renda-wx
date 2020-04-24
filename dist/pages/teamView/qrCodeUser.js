"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_http=require("./../../http.js"),_districtSelet=require("./../../components/districtSelet.js"),_districtSelet2=_interopRequireDefault(_districtSelet),_util=require("./../../util.js"),qrCodeUser=function(e){function t(){var e,i,r,n;_classCallCheck(this,t);for(var a=arguments.length,o=Array(a),s=0;s<a;s++)o[s]=arguments[s];return i=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.$repeat={},r.$props={districtSelet:{bindselectCity:"selectCity","xmlns:v-bind":"","v-bind:disabled.sync":"disabled"}},r.$events={},r.components={districtSelet:_districtSelet2.default},r.data={form:{id_card:"",mobile:"",user_name:"",status:1,remark:"",grade_id:0,grade_num:""},eduList:["高中以下","高中","专科","本科","硕士"],index:0,eduIndex:0,disabled:!0,uid:"",userUid:"",id:"",userTeamType:"",rendaUidQrcode:"",teamId:"",invite_uid:""},r.config={navigationBarTitleText:"成员详情"},r.events={selectCity:function(e){r.form.provinceid=e[0]?e[0]:0,r.form.cityid=e[1]?e[1]:0,r.form.three_cityid=e[2]?e[2]:0}},r.methods={pickerChange:function(e){var t=e.currentTarget.dataset.name;"education"===t?(this.eduIndex=e.detail.value,this.form[t]=e.detail.value):"depId"===t?(this.depIndex=e.detail.value,this.depId=this.depList[this.depIndex].id,this.jobList=this.getArr(this.depList,this.depId)):"grade_id"===t?(this.jobIndex=e.detail.value,this.form[t]=this.jobList[this.jobIndex].id):(this.index=e.detail.value,this.form[t]=Number(e.detail.value)+1),this.$apply()},changeInput:function(e){var t=e.currentTarget.dataset.name;this.form[t]=e.detail.value},save:function(){this.form.user_name?this.form.mobile?(0,_util.checkMobile)(this.form.mobile)?this.form.id_card?(0,_util.validateIdCard)(this.form.id_card)?this.bindMember(this.form):(0,_util.wxToast)("请输入正确的身份证"):(0,_util.wxToast)("请输入身份证号码"):(0,_util.wxToast)("请输入正确的手机号码"):(0,_util.wxToast)("请输入手机号码"):(0,_util.wxToast)("请输入姓名")}},n=i,_possibleConstructorReturn(r,n)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){if(e.query&&wx.getStorageSync("rendaUidQrcode")){var t=JSON.parse(e.query);this.teamId=t.teamId,this.id="",this.form.mobile=t.tel,this.uid=t.uid,this.invite_uid=t.invite_uid||wx.getStorageSync("rendaUidQrcode")}this.$apply()}},{key:"bindMember",value:function(e){var t=Object.assign(e,{uid:this.uid,invite_uid:this.invite_uid});(0,_http.$http)("/userinfo/bindMember",t).then(function(e){e.data?(wx.removeStorageSync("rendaUidQrcode"),wx.removeStorageSync("rendaUserTeamId"),(0,_util.wxRedirectTo)("/pages/teamView/index")):(0,_util.wxToast)("添加失败")})}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(qrCodeUser,"pages/teamView/qrCodeUser"));