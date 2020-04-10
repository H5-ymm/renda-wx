"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_http=require("./../../http.js"),_util=require("./../../util.js"),_moment=require("./../../npm/moment/moment.js"),_moment2=_interopRequireDefault(_moment),teamDetail=function(e){function t(){var e,o,n,a;_classCallCheck(this,t);for(var i=arguments.length,r=Array(i),u=0;u<i;u++)r[u]=arguments[u];return o=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),n.data={form:{},teamId:"",formJob:{}},n.config={navigationBarTitleText:"团队详情"},n.methods={viewJob:function(){(0,_util.wxReLaunch)("/pages/companyView/viewJob?query="+this.formJob.job_id)},handleTeam:function(e){var t=this,o={uid:wx.getStorageSync("rendaUid"),id:this.formJob.id,status:e},n=1==e?"同意":"拒绝";(0,_util.wxShowModal)("","确定"+n+"团队申请接单",n).then(function(e){t.auditInvoiceInfo(o)}).catch(function(){console.log("取消")})},deleteTeamApply:function(){var e=this,t={uid:wx.getStorageSync("rendaUid"),id:this.formJob.id};(0,_util.wxShowModal)("","确定删除团队申请接单").then(function(o){e.delCompanyTeamApply(t)}).catch(function(){console.log("取消")})},contactPhone:function(){wx.showActionSheet({itemList:["拨打021-51991869"],success:function(e){wx.makePhoneCall({phoneNumber:"021-51991869"})},fail:function(e){console.log(e.errMsg)}})}},a=o,_possibleConstructorReturn(n,a)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){this.teamId=JSON.parse(e.query).team_id,this.formJob=JSON.parse(e.query),console.log(this.formJob),this.getTeamInfo(this.teamId)}},{key:"auditInvoiceInfo",value:function(e){(0,_http.$http)("/company/auditInvoiceInfo",e).then(function(e){(0,_util.wxNavigateTo)("/pages/companyView/checkTeam")})}},{key:"delCompanyTeamApply",value:function(e){(0,_http.$http)("/company/delCompanyTeamApply",e).then(function(e){(0,_util.wxNavigateTo)("/pages/companyView/checkTeam")})}},{key:"getTeamInfo",value:function(e){var t=this,o={uid:wx.getStorageSync("rendaUid"),teamId:e};(0,_http.$http)("/company/seeTeamInfo",o).then(function(e){t.form=e.data,t.form.addtime=_moment2.default.unix(t.form.addtime).format("YYYY-MM-DD HH:mm"),console.log(t.form),t.$apply()})}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(teamDetail,"pages/companyView/teamDetail"));