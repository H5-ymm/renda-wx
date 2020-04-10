"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_util=require("./../../util.js"),userInfo=function(e){function t(){var e,r,n,o;_classCallCheck(this,t);for(var s=arguments.length,i=Array(s),a=0;a<s;a++)i[a]=arguments[a];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.config={navigationBarTitleText:"账户信息"},n.data={userInfo:{},head_img:"",wxAddress:""},n.computed={userName:function(){var e=wx.getStorageSync("wxInfo")?JSON.parse(wx.getStorageSync("wxInfo")).user_name:"";return this.userInfo.user_name?this.userInfo.user_name:e},address:function(){return(this.userInfo.provinceName?this.userInfo.provinceName:"")+(this.userInfo.cityName?this.userInfo.cityName:"")+(this.userInfo.address?this.userInfo.address:"")}},o=r,_possibleConstructorReturn(n,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){if(wx.getStorageSync("userInfo")){this.userInfo=JSON.parse(wx.getStorageSync("userInfo"));var e=wx.getStorageSync("wxInfo");this.wxAddress=e?JSON.parse(e).address:"",this.userInfo.head_img?this.userInfo.head_img.indexOf("http")>-1?this.head_img=this.userInfo.head_img:this.head_img=(0,_util.getImgUrl)(this.userInfo.head_img):this.head_img=e?JSON.parse(this.wxUserinfo).head_img:"",this.$apply()}}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(userInfo,"pages/my/userInfo"));