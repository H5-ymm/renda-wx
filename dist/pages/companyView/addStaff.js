"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_districtSelet=require("./../../components/districtSelet.js"),_districtSelet2=_interopRequireDefault(_districtSelet),_modal=require("./../../components/modal.js"),_modal2=_interopRequireDefault(_modal),_http=require("./../../http.js"),_moment=require("./../../npm/moment/moment.js"),_moment2=_interopRequireDefault(_moment),_util=require("./../../util.js"),lock=!1,addStaff=function(t){function e(){var t,i,a,n;_classCallCheck(this,e);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return i=a=_possibleConstructorReturn(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(r))),a.$repeat={},a.$props={districtSelet:{bindselectCity:"selectCity","xmlns:v-bind":"","v-bind:address.sync":"address"},modal:{"v-bind:isScaleModal.sync":"isModal","v-bind:height.sync":"modalHeight",bindhandleOk:"handleOk","v-bind:modalObj.sync":"modalObj"}},a.$events={},a.components={districtSelet:_districtSelet2.default,modal:_modal2.default},a.data={isModal:!0,array:["男","女"],eduList:["高中以下","高中","专科","本科","硕士"],modalHeight:460,modalObj:{title:"添加成功！",subTitle:"",imgBg:"https://a.rsd123.com/image/images/success.png"},form:{name:"",idcard:"",age:"",mobile:"",sex:1,education:0,post:"",provinceid:"",cityid:"",entry_time:""},index:0,eduIndex:0,id:"",address:[],entry_time:"",uid:""},a.events={handleOk:function(){a.isModal=!0,a.$apply(),(0,_util.wxReLaunch)("/pages/companyView/staffManage")},selectCity:function(t){a.form.provinceid=t[0]?t[0]:0,a.form.cityid=t[1]?t[1]:0}},a.methods={bindPickerChange:function(t){this.index=t.detail.value,this.form.sex=Number(this.index)+1},eduPickerChange:function(t){this.eduIndex=t.detail.value,this.form.education=this.eduIndex},bindTimeChange:function(t){var e=(0,_moment2.default)(t.detail.value).valueOf();this.form.entry_time=e.toString().substring(0,10),this.entry_time=t.detail.value},changeInput:function(t){var e=t.currentTarget.dataset.name;this.form[e]=t.detail.value},deleteStaff:function(){var t=this,e=1==this.form.entry_status?"员工离职":"删除员工";(0,_util.wxShowModal)("","确定"+e+"吗?","确定").then(function(e){t.delStaff()}).catch(function(){console.log("取消")})},save:function(){var t=this;this.form.name?this.form.mobile?(0,_util.checkMobile)(this.form.mobile)?this.form.idcard&&!(0,_util.validateIdCard)(this.form.idcard)?(0,_util.wxToast)("请输入正确的身份证"):this.form.post?this.id?(0,_util.wxShowModal)("","确修改员工信息吗?","确定").then(function(e){t.updateStaff()}).catch(function(){}):this.addStaff():(0,_util.wxToast)("请输入岗位名称"):(0,_util.wxToast)("请输入正确的手机号码"):(0,_util.wxToast)("请输入手机号码"):(0,_util.wxToast)("请输入姓名")}},n=i,_possibleConstructorReturn(a,n)}return _inherits(e,t),_createClass(e,[{key:"onLoad",value:function(t){this.uid=wx.getStorageSync("rendaUid")||this.$parent.globalData.uid,t.query?(this.id=t.query,this.staffDetail(this.id)):this.entry_time=(0,_moment2.default)().format("YYYY-MM-DD"),this.$apply()}},{key:"addStaff",value:function(){var t=this;lock=!0,this.form.uid=this.uid,(0,_http.$http)("/companyresume/addCompanyResume",this.form).then(function(e){lock=!1,e.data?(t.isModal=!1,t.$apply()):(0,_util.wxToast)("添加失败")}).catch(function(t){lock=!1,(0,_util.wxToast)(t.status.remind)}),this.$apply()}},{key:"updateStaff",value:function(){this.form.uid=this.uid,(0,_http.$http)("/companyresume/editCompanyResumeInfo",this.form).then(function(t){t.data?((0,_util.wxToast)("修改成功"),(0,_util.wxReLaunch)("/pages/companyView/staffManage")):(0,_util.wxToast)("修改失败")}).catch(function(t){(0,_util.wxToast)(t.status.remind)}),this.$apply()}},{key:"delStaff",value:function(){var t={uid:this.uid,id:this.id},e=1==this.form.entry_status?"/companyresume/doQuitCompanyResume":"/companyresume/delCompanyResumeInfo";(0,_http.$http)(e,t).then(function(t){t.data?(0,_util.wxReLaunch)("/pages/companyView/staffManage"):(0,_util.wxToast)("操作失败")}).catch(function(t){(0,_util.wxToast)(t.status.remind)}),this.$apply()}},{key:"staffDetail",value:function(t){var e=this,i={uid:this.uid,id:t};(0,_http.$http)("/companyresume/selectCompanyResumeInfo",i).then(function(t){e.form=t.data,e.form.address=e.form.address?e.form.address:"-",e.form.post=e.form.post?e.form.post:e.form.jobName,e.entry_time=e.form.entry_time?_moment2.default.unix(e.form.entry_time).format("YYYY-MM-DD"):"",t.data.provinceid&&(e.address=[t.data.provinceid,t.data.cityid]),e.$apply()})}}]),e}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(addStaff,"pages/companyView/addStaff"));