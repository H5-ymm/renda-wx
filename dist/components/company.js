"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),_dec,_class,_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_districtSelet=require("./districtSelet.js"),_districtSelet2=_interopRequireDefault(_districtSelet),_util=require("./../util.js"),_http=require("./../http.js"),_wepyRedux=require("./../npm/wepy-redux/lib/index.js"),store=(0,_wepyRedux.getStore)(),Company=(_dec=(0,_wepyRedux.connect)({list:function(e){return e.contant.list}}))(_class=function(e){function t(){var e,r,i,n;_classCallCheck(this,t);for(var o=arguments.length,s=Array(o),a=0;a<o;a++)s[a]=arguments[a];return r=i=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.props={resumeInfo:Object},i.$repeat={},i.$props={districtSelet:{bindselectCity:"selectCity","xmlns:v-bind":"","v-bind:address.sync":"[]","v-bind:disabled.sync":"disabled"}},i.$events={},i.components={districtSelet:_districtSelet2.default},i.data={form:{address:"",provinceid:"",three_cityid:"",cityid:"",job_id:"",com_type:"",com_scale:"",logo:"",phoneEnd:"",phone:"",unified_social:"",business_licence:"",jobName:""},infoImg:"",registerType:"",list:[],com_type:[],com_scale:[],job_array:[],comIndex:0,comScaleIndex:0,jobIndex:0,disabled:!0},i.watch={form:function(e){this.$emit("submit",e)}},i.events={selectCity:function(e){i.form.provinceid=e[0]?e[0]:0,i.form.cityid=e[1]?e[1]:0,i.form.three_cityid=e[2]?e[2]:0}},i.methods={uploadImg:function(){var e=this;wx.chooseImage({sizeType:["compressed"],success:function(t){(0,_util.compressImg)(t.tempFilePaths[0]).then(function(t){e.cWidth=t.cWidth,e.cHeight=t.cHeight,e.getImg([t.url])})}})},bindPickerChange:function(e){var t=e.currentTarget.dataset.name;"job_id"===t?(this.jobIndex=e.detail.value,this.form.jobName=this.job_array[this.jobIndex]):"com_type"===t?this.comIndex=e.detail.value:this.comScaleIndex=e.detail.value,this.form[t]=e.detail.value,this.$apply()},changeInput:function(e){var t=e.currentTarget.dataset.name;this.form[t]=e.detail.value,this.$apply()}},n=r,_possibleConstructorReturn(i,n)}return _inherits(t,e),_createClass(t,[{key:"isCheck",value:function(e){var t=!0;for(var r in e)"phoneEnd"!==r&&"address"!==r&&"phone"!==r&&"unified_social"!=r&&""===r&&(t=!1);return t}},{key:"onLoad",value:function(){var e=store.getState().contant.list;for(var t in e)this[t]=e[t];this.registerType=wx.getStorageSync("rendaUserType"),console.log(this.registerType+"ddd"),this.$apply()}},{key:"getImg",value:function(e){var t=this;(0,_http.uploadFile)(e).then(function(e){e.data&&e.data.url?(t.infoImg=(0,_util.getImgUrl)(e.data.url),t.form.logo=e.data.url,t.$apply()):(0,_util.wxToast)("图片获取失败")})}}]),t}(_wepy2.default.component))||_class;exports.default=Company;