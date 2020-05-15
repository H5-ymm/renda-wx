'use strict';

var _moment = require('./npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var manglingFormatCardNumber = function manglingFormatCardNumber(cardNumber) {
    if (cardNumber && cardNumber.length > 8) {
        return cardNumber.substring(0, 4) + ' ' + '*'.repeat(cardNumber.length - 8).replace(/(.{4})/g, '\n        $1 ') + (cardNumber.length % 4 ? ' ' : '') + cardNumber.slice(-4);
    }
    // eslint-disable-next-line semi
    return cardNumber;
};
var validateIdCard = function validateIdCard(idCard) {
    var idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    var flag = false;
    // 如果通过该验证，说明身份证格式正确，但准确性还需计算
    if (idcardReg.test(idCard)) {
        flag = true;
    } else {
        flag = false;
    }
    return flag;
};

var checkMobile = function checkMobile(mobile) {
    var reg = /^1[3456789]\d{9}$/;
    var flag = false;
    if (!reg.test(mobile)) {
        flag = false;
    } else {
        flag = true;
    }
    return flag;
};
var getErrorTip = function getErrorTip(code) {
    var text = '联系客服人员：021-51991869，\n 微信：18621532378 QQ：529350865';
    var obj = {
        title: '',
        subTitle: ''
    };
    switch (code) {
        case 6001:
            obj.title = '您还没有注册哦';
            obj.subTitle = '亲！您还不是团队成员或企业，请前往 www.rsd123.com 进行注册申请，\n或' + text;
            break;
        case 6002:
            obj.title = '仅允许团队成员查看';
            obj.subTitle = text;
            break;
        case 6006:
            obj.title = '账号审核中需要1-2工作日';
            obj.subTitle = text;
            break;
        case 6010:
            obj.title = '账号审核中需要1-2工作日';
            obj.subTitle = text;
            break;
        case 6007:
            obj.title = '您的团队审核未通过哦';
            obj.subTitle = text;
            break;
        case 6008:
            obj.title = '团队信息未完善';
            obj.subTitle = '亲！您的团队信息未完善，请前往 www.rsd123.com 进行完善，\n或' + text;
            break;
        case 1009:
            obj.title = '您的团队账号被锁定';
            obj.subTitle = text;
            break;
        default:
            obj = {
                title: '',
                subTitle: ''
            };
    }
    return obj;
};
var getImgUrl = function getImgUrl(imgUrl) {
    var baseUrl = 'https://a.rsd123.com/';
    // const baseUrl = 'http://tiantianxsg.com:39888/'
    return baseUrl + imgUrl;
};
var compressImg = function compressImg(photoSrc) {
    var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    var obj = {
        url: '',
        cWidth: 0,
        cHeight: ''
    };
    return new Promise(function (resolve, reject) {
        wx.getImageInfo({
            src: photoSrc,
            success: function success(res) {
                var _this = this;

                var canvasWidth = res.width; // 图片原始长宽
                var canvasHeight = res.height;
                canvasWidth = 300;
                canvasHeight = 200;
                obj.cWidth = canvasWidth + 100;
                obj.cHeight = canvasHeight + 100;
                // ----------绘制图形并取出图片路径--------------
                var ctx = wx.createCanvasContext('canvas');
                ctx.drawImage(res.path, 0, 0, canvasWidth, canvasHeight);
                ctx.draw(false, setTimeout(function () {
                    wx.canvasToTempFilePath({
                        canvasId: 'canvas',
                        destWidth: canvasWidth,
                        destHeight: canvasHeight,
                        success: function success(res) {
                            console.log(res.tempFilePath);
                            obj.url = res.tempFilePath;
                            resolve(obj);
                        },
                        fail: function fail(res) {
                            console.log(res.errMsg);
                        }
                    }, _this);
                }, 100));
            },

            fail: function fail(res) {
                console.log(res.errMsg);
            }
        });
    });
};
var wxToast = function wxToast(title) {
    return wx.showToast({
        title: title,
        icon: 'none',
        duration: 2000
    });
};
var wxNavigateTo = function wxNavigateTo(url) {
    setTimeout(function () {
        wx.navigateTo({
            url: url // 页面 A
        });
    }, 300);
};
var wxRedirectTo = function wxRedirectTo(url) {
    setTimeout(function () {
        wx.redirectTo({
            url: url // 页面 A
        });
    }, 300);
};
var wxReLaunch = function wxReLaunch(url) {
    setTimeout(function () {
        wx.reLaunch({
            url: url // 页面 A
        });
    }, 300);
};
var getArray = function getArray(obj) {
    var arr = [];
    for (var key in obj) {
        arr.push(obj[key]);
    }
    return arr;
};
var getKeyValue = function getKeyValue(obj) {
    for (var key in obj) {
        if (key === 'job_array') {
            obj[key] = getArray(obj[key]);
        }
    }
    return obj;
};
var weekList = function weekList() {
    var arr = [];
    for (var i = 1; i < 8; i++) {
        arr.push(replaceWeek(i));
    }
    return arr;
};
var replaceWeek = function replaceWeek(number) {
    var text = '';
    switch (number) {
        case 1:
            text = '周一';
            break;
        case 2:
            text = '周二';
            break;
        case 3:
            text = '周三';
            break;
        case 4:
            text = '周四';
            break;
        case 5:
            text = '周五';
            break;
        case 6:
            text = '周六';
            break;
        case 7:
            text = '周日';
            break;
        default:
            text = '';
    }
    return text;
};
var ageList = function ageList() {
    var arr = [];
    for (var i = 16; i < 66; i++) {
        arr.push(i);
    }
    return arr;
};
var rewardTypeText = function rewardTypeText() {
    var text = '';
    switch (number) {
        case 1:
            text = '时';
            break;
        case 2:
            text = '日';
            break;
        case 3:
            text = '月';
            break;
        default:
            text = '';
    }
    return '元/人/' + text;
};
var wxShowModal = function wxShowModal(title, content, confirmText) {
    return new Promise(function (resove, rejcet) {
        wx.showModal({
            title: title || '操作提示',
            content: content,
            confirmText: confirmText || '确定',
            cancelColor: '#666666',
            confirmColor: '#1890FF',
            success: function success(res) {
                if (res.confirm) {
                    resove();
                } else if (res.cancel) {
                    rejcet();
                }
            }
        });
    });
};
var getList = function getList(list, key, formatType) {
    var type = formatType || 'YYYY-MM-DD';
    return list.map(function (item) {
        var flag = void 0;
        var reg = /^[0-9]+.?[0-9]*$/;
        if (item[key] && reg.test(item[key])) {
            flag = true;
        }
        item[key] = flag ? _moment2.default.unix(item[key]).format(type) : (0, _moment2.default)(item[key]).format(type);
        return item;
    });
};
module.exports = {
    manglingFormatCardNumber: manglingFormatCardNumber,
    validateIdCard: validateIdCard,
    checkMobile: checkMobile,
    getErrorTip: getErrorTip,
    getImgUrl: getImgUrl,
    wxToast: wxToast,
    compressImg: compressImg,
    wxNavigateTo: wxNavigateTo,
    wxRedirectTo: wxRedirectTo,
    wxReLaunch: wxReLaunch,
    getArray: getArray,
    getKeyValue: getKeyValue,
    weekList: weekList,
    ageList: ageList,
    rewardTypeText: rewardTypeText,
    wxShowModal: wxShowModal,
    getList: getList
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsibWFuZ2xpbmdGb3JtYXRDYXJkTnVtYmVyIiwiY2FyZE51bWJlciIsImxlbmd0aCIsInN1YnN0cmluZyIsInJlcGVhdCIsInJlcGxhY2UiLCJzbGljZSIsInZhbGlkYXRlSWRDYXJkIiwiaWRjYXJkUmVnIiwiZmxhZyIsInRlc3QiLCJpZENhcmQiLCJjaGVja01vYmlsZSIsInJlZyIsIm1vYmlsZSIsImdldEVycm9yVGlwIiwidGV4dCIsIm9iaiIsInRpdGxlIiwic3ViVGl0bGUiLCJjb2RlIiwiZ2V0SW1nVXJsIiwiYmFzZVVybCIsImltZ1VybCIsImNvbXByZXNzSW1nIiwicGhvdG9TcmMiLCJyYXRpbyIsInVybCIsImNXaWR0aCIsImNIZWlnaHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInd4IiwiZ2V0SW1hZ2VJbmZvIiwic3JjIiwic3VjY2VzcyIsInJlcyIsImNhbnZhc1dpZHRoIiwid2lkdGgiLCJjYW52YXNIZWlnaHQiLCJoZWlnaHQiLCJjdHgiLCJjcmVhdGVDYW52YXNDb250ZXh0IiwiZHJhd0ltYWdlIiwicGF0aCIsImRyYXciLCJzZXRUaW1lb3V0IiwiY2FudmFzVG9UZW1wRmlsZVBhdGgiLCJjYW52YXNJZCIsImRlc3RXaWR0aCIsImRlc3RIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwidGVtcEZpbGVQYXRoIiwiZmFpbCIsImVyck1zZyIsInd4VG9hc3QiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJ3eE5hdmlnYXRlVG8iLCJuYXZpZ2F0ZVRvIiwid3hSZWRpcmVjdFRvIiwicmVkaXJlY3RUbyIsInd4UmVMYXVuY2giLCJyZUxhdW5jaCIsImdldEFycmF5IiwiYXJyIiwia2V5IiwicHVzaCIsImdldEtleVZhbHVlIiwid2Vla0xpc3QiLCJpIiwicmVwbGFjZVdlZWsiLCJudW1iZXIiLCJhZ2VMaXN0IiwicmV3YXJkVHlwZVRleHQiLCJ3eFNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInJlc292ZSIsInJlamNldCIsInNob3dNb2RhbCIsImNhbmNlbENvbG9yIiwiY29uZmlybUNvbG9yIiwiY29uZmlybSIsImNhbmNlbCIsImdldExpc3QiLCJsaXN0IiwiZm9ybWF0VHlwZSIsInR5cGUiLCJtYXAiLCJpdGVtIiwiJG1vbWVudCIsInVuaXgiLCJmb3JtYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFDQSxJQUFNQSwyQkFBMkIsU0FBM0JBLHdCQUEyQixDQUFDQyxVQUFELEVBQWdCO0FBQzdDLFFBQUlBLGNBQWNBLFdBQVdDLE1BQVgsR0FBb0IsQ0FBdEMsRUFBeUM7QUFDckMsZUFBVUQsV0FBV0UsU0FBWCxDQUFxQixDQUFyQixFQUF3QixDQUF4QixDQUFWLFNBQXdDLElBQ25DQyxNQURtQyxDQUM1QkgsV0FBV0MsTUFBWCxHQUFvQixDQURRLEVBRW5DRyxPQUZtQyxDQUUzQixTQUYyQixrQkFBeEMsSUFJSUosV0FBV0MsTUFBWCxHQUFvQixDQUFwQixHQUF3QixHQUF4QixHQUE4QixFQUpsQyxJQUtPRCxXQUFXSyxLQUFYLENBQWlCLENBQUMsQ0FBbEIsQ0FMUDtBQU1IO0FBQ0Q7QUFDQSxXQUFPTCxVQUFQO0FBQ0gsQ0FYRDtBQVlBLElBQU1NLGlCQUFpQixTQUFqQkEsY0FBaUIsU0FBVTtBQUM3QixRQUFJQyxZQUFZLGdJQUFoQjtBQUNBLFFBQUlDLE9BQU8sS0FBWDtBQUNBO0FBQ0EsUUFBSUQsVUFBVUUsSUFBVixDQUFlQyxNQUFmLENBQUosRUFBNEI7QUFDeEJGLGVBQU8sSUFBUDtBQUNILEtBRkQsTUFFTztBQUNIQSxlQUFPLEtBQVA7QUFDSDtBQUNELFdBQU9BLElBQVA7QUFDSCxDQVZEOztBQVlBLElBQU1HLGNBQWMsU0FBZEEsV0FBYyxTQUFVO0FBQzFCLFFBQUlDLE1BQU0sbUJBQVY7QUFDQSxRQUFJSixPQUFPLEtBQVg7QUFDQSxRQUFJLENBQUNJLElBQUlILElBQUosQ0FBU0ksTUFBVCxDQUFMLEVBQXVC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Q0EsV0FBT0QsS0FBS0csR0FBTCxDQUFTLGdCQUFRO0FBQ3BCLFlBQUluRixhQUFKO0FBQ0EsWUFBSUksTUFBTSxrQkFBVjtBQUNBLFlBQUlnRixLQUFLeEIsR0FBTCxLQUFheEQsSUFBSUgsSUFBSixDQUFTbUYsS0FBS3hCLEdBQUwsQ0FBVCxDQUFqQixFQUFzQztBQUNsQzVELG1CQUFPLElBQVA7QUFDSDtBQUNEb0YsYUFBS3hCLEdBQUwsSUFBWTVELE9BQU9xRixpQkFBUUMsSUFBUixDQUFhRixLQUFLeEIsR0FBTCxDQUFiLEVBQXdCMkIsTUFBeEIsQ0FBK0JMLElBQS9CLENBQVAsR0FBOEMsc0JBQVFFLEtBQUt4QixHQUFMLENBQVIsRUFBbUIyQixNQUFuQixDQUEwQkwsSUFBMUIsQ0FBMUQ7QUFDQSxlQUFPRSxJQUFQO0FBQ0gsS0FSTSxDQUFQO0FBU0gsQ0FYRDtBQVlBSSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2JsRyw4QkFBMEJBLHdCQURiO0FBRWJPLG9CQUFnQkEsY0FGSDtBQUdiSyxpQkFBYUEsV0FIQTtBQUliRyxpQkFBYUEsV0FKQTtBQUtiTSxlQUFXQSxTQUxFO0FBTWJvQyxhQUFTQSxPQU5JO0FBT2JqQyxpQkFBYUEsV0FQQTtBQVFicUMsa0JBQWNBLFlBUkQ7QUFTYkUsa0JBQWNBLFlBVEQ7QUFVYkUsZ0JBQVlBLFVBVkM7QUFXYkUsY0FBVUEsUUFYRztBQVliSSxpQkFBYUEsV0FaQTtBQWFiQyxjQUFVQSxRQWJHO0FBY2JJLGFBQVNBLE9BZEk7QUFlYkMsb0JBQWdCQSxjQWZIO0FBZ0JiQyxpQkFBYUEsV0FoQkE7QUFpQmJVLGFBQVNBO0FBakJJLENBQWpCIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5jb25zdCBtYW5nbGluZ0Zvcm1hdENhcmROdW1iZXIgPSAoY2FyZE51bWJlcikgPT4ge1xyXG4gICAgaWYgKGNhcmROdW1iZXIgJiYgY2FyZE51bWJlci5sZW5ndGggPiA4KSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2NhcmROdW1iZXIuc3Vic3RyaW5nKDAsIDQpfSAkeycqJ1xyXG4gICAgICAgICAgICAucmVwZWF0KGNhcmROdW1iZXIubGVuZ3RoIC0gOClcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyguezR9KS9nLCBgXHJcbiAgICAgICAgJDEgYCl9JHtcclxuICAgICAgICAgICAgY2FyZE51bWJlci5sZW5ndGggJSA0ID8gJyAnIDogJydcclxuICAgICAgICAgICAgfSR7Y2FyZE51bWJlci5zbGljZSgtNCl9YDtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzZW1pXHJcbiAgICByZXR1cm4gY2FyZE51bWJlclxyXG59O1xyXG5jb25zdCB2YWxpZGF0ZUlkQ2FyZCA9IGlkQ2FyZCA9PiB7XHJcbiAgICB2YXIgaWRjYXJkUmVnID0gL15bMS05XVxcZHs3fSgoMFxcZCl8KDFbMC0yXSkpKChbMHwxfDJdXFxkKXwzWzAtMV0pXFxkezN9JHxeWzEtOV1cXGR7NX1bMS05XVxcZHszfSgoMFxcZCl8KDFbMC0yXSkpKChbMHwxfDJdXFxkKXwzWzAtMV0pXFxkezN9KFswLTldfFgpJC9cclxuICAgIHZhciBmbGFnID0gZmFsc2U7XHJcbiAgICAvLyDlpoLmnpzpgJrov4for6Xpqozor4HvvIzor7TmmI7ouqvku73or4HmoLzlvI/mraPnoa7vvIzkvYblh4bnoa7mgKfov5jpnIDorqHnrpdcclxuICAgIGlmIChpZGNhcmRSZWcudGVzdChpZENhcmQpKSB7XHJcbiAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmbGFnO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2tNb2JpbGUgPSBtb2JpbGUgPT4ge1xyXG4gICAgbGV0IHJlZyA9IC9eMVszNDU2Nzg5XVxcZHs5fSQvO1xyXG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgIGlmICghcmVnLnRlc3QobW9iaWxlKSkge1xyXG4gICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmxhZztcclxufTtcclxuY29uc3QgZ2V0RXJyb3JUaXAgPSBjb2RlID0+IHtcclxuICAgIGxldCB0ZXh0ID0gJ+iBlOezu+WuouacjeS6uuWRmO+8mjAyMS01MTk5MTg2Oe+8jFxcbiDlvq7kv6HvvJoxODYyMTUzMjM3OCBRUe+8mjUyOTM1MDg2NSc7XHJcbiAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBzdWJUaXRsZTogJydcclxuICAgIH1cclxuICAgIHN3aXRjaCAoY29kZSkge1xyXG4gICAgICAgIGNhc2UgNjAwMTpcclxuICAgICAgICAgICAgb2JqLnRpdGxlID0gJ+aCqOi/mOayoeacieazqOWGjOWTpic7XHJcbiAgICAgICAgICAgIG9iai5zdWJUaXRsZSA9ICfkurLvvIHmgqjov5jkuI3mmK/lm6LpmJ/miJDlkZjmiJbkvIHkuJrvvIzor7fliY3lvoAgd3d3LnJzZDEyMy5jb20g6L+b6KGM5rOo5YaM55Sz6K+377yMXFxu5oiWJyArIHRleHQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjAwMjpcclxuICAgICAgICAgICAgb2JqLnRpdGxlID0gJ+S7heWFgeiuuOWboumYn+aIkOWRmOafpeeciyc7XHJcbiAgICAgICAgICAgIG9iai5zdWJUaXRsZSA9IHRleHQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjAwNjpcclxuICAgICAgICAgICAgb2JqLnRpdGxlID0gJ+i0puWPt+WuoeaguOS4remcgOimgTEtMuW3peS9nOaXpSc7XHJcbiAgICAgICAgICAgIG9iai5zdWJUaXRsZSA9IHRleHQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjAxMDpcclxuICAgICAgICAgICAgb2JqLnRpdGxlID0gJ+i0puWPt+WuoeaguOS4remcgOimgTEtMuW3peS9nOaXpSc7XHJcbiAgICAgICAgICAgIG9iai5zdWJUaXRsZSA9IHRleHQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjAwNzpcclxuICAgICAgICAgICAgb2JqLnRpdGxlID0gJ+aCqOeahOWboumYn+WuoeaguOacqumAmui/h+WTpic7XHJcbiAgICAgICAgICAgIG9iai5zdWJUaXRsZSA9IHRleHQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjAwODpcclxuICAgICAgICAgICAgb2JqLnRpdGxlID0gJ+WboumYn+S/oeaBr+acquWujOWWhCc7XHJcbiAgICAgICAgICAgIG9iai5zdWJUaXRsZSA9ICfkurLvvIHmgqjnmoTlm6LpmJ/kv6Hmga/mnKrlrozlloTvvIzor7fliY3lvoAgd3d3LnJzZDEyMy5jb20g6L+b6KGM5a6M5ZaE77yMXFxu5oiWJyArIHRleHQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTAwOTpcclxuICAgICAgICAgICAgb2JqLnRpdGxlID0gJ+aCqOeahOWboumYn+i0puWPt+iiq+mUgeWumic7XHJcbiAgICAgICAgICAgIG9iai5zdWJUaXRsZSA9IHRleHQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHN1YlRpdGxlOiAnJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxufTtcclxuY29uc3QgZ2V0SW1nVXJsID0gaW1nVXJsID0+IHtcclxuICAgIGNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9hLnJzZDEyMy5jb20vJ1xyXG4gICAgLy8gY29uc3QgYmFzZVVybCA9ICdodHRwOi8vdGlhbnRpYW54c2cuY29tOjM5ODg4LydcclxuICAgIHJldHVybiBiYXNlVXJsICsgaW1nVXJsO1xyXG59O1xyXG5jb25zdCBjb21wcmVzc0ltZyA9IChwaG90b1NyYywgcmF0aW8gPSAyKSA9PiB7XHJcbiAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgIHVybDogJycsXHJcbiAgICAgICAgY1dpZHRoOiAwLFxyXG4gICAgICAgIGNIZWlnaHQ6ICcnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHd4LmdldEltYWdlSW5mbyh7XHJcbiAgICAgICAgICAgIHNyYzogcGhvdG9TcmMsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhc1dpZHRoID0gcmVzLndpZHRoIC8vIOWbvueJh+WOn+Wni+mVv+WuvVxyXG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhc0hlaWdodCA9IHJlcy5oZWlnaHRcclxuICAgICAgICAgICAgICAgIGNhbnZhc1dpZHRoID0gMzAwXHJcbiAgICAgICAgICAgICAgICBjYW52YXNIZWlnaHQgPSAyMDBcclxuICAgICAgICAgICAgICAgIG9iai5jV2lkdGggPSBjYW52YXNXaWR0aCArIDEwMFxyXG4gICAgICAgICAgICAgICAgb2JqLmNIZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAxMDBcclxuICAgICAgICAgICAgICAgIC8vIC0tLS0tLS0tLS3nu5jliLblm77lvaLlubblj5blh7rlm77niYfot6/lvoQtLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAgICAgdmFyIGN0eCA9IHd4LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2NhbnZhcycpXHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHJlcy5wYXRoLCAwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXcoXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhc0lkOiAnY2FudmFzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RXaWR0aDogY2FudmFzV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0SGVpZ2h0OiBjYW52YXNIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnRlbXBGaWxlUGF0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmoudXJsID0gcmVzLnRlbXBGaWxlUGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUob2JqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuY29uc3Qgd3hUb2FzdCA9IHRpdGxlID0+IHtcclxuICAgIHJldHVybiB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgIH0pXHJcbn1cclxuY29uc3Qgd3hOYXZpZ2F0ZVRvID0gdXJsID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6IHVybCAvLyDpobXpnaIgQVxyXG4gICAgICAgIH0pXHJcbiAgICB9LCAzMDApXHJcbn1cclxuY29uc3Qgd3hSZWRpcmVjdFRvID0gdXJsID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICB1cmw6IHVybCAvLyDpobXpnaIgQVxyXG4gICAgICAgIH0pXHJcbiAgICB9LCAzMDApXHJcbn1cclxuY29uc3Qgd3hSZUxhdW5jaCA9IHVybCA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsIC8vIOmhtemdoiBBXHJcbiAgICAgICAgfSlcclxuICAgIH0sIDMwMClcclxufVxyXG5jb25zdCBnZXRBcnJheSA9IG9iaiA9PiB7XHJcbiAgICBsZXQgYXJyID0gW11cclxuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgICAgICBhcnIucHVzaChvYmpba2V5XSlcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJcclxufVxyXG5jb25zdCBnZXRLZXlWYWx1ZSA9IG9iaiA9PiB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ2pvYl9hcnJheScpIHtcclxuICAgICAgICAgICAgb2JqW2tleV0gPSBnZXRBcnJheShvYmpba2V5XSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqXHJcbn1cclxuY29uc3Qgd2Vla0xpc3QgPSAoKSA9PiB7XHJcbiAgICBsZXQgYXJyID0gW11cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgYXJyLnB1c2gocmVwbGFjZVdlZWsoaSkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyXHJcbn1cclxuY29uc3QgcmVwbGFjZVdlZWsgPSAobnVtYmVyKSA9PiB7XHJcbiAgICBsZXQgdGV4dCA9ICcnXHJcbiAgICBzd2l0Y2ggKG51bWJlcikge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgdGV4dCA9ICflkajkuIAnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgdGV4dCA9ICflkajkuownXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgdGV4dCA9ICflkajkuIknXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgdGV4dCA9ICflkajlm5snXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgdGV4dCA9ICflkajkupQnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgdGV4dCA9ICflkajlha0nXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgdGV4dCA9ICflkajml6UnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRleHQgPSAnJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRleHRcclxufVxyXG5jb25zdCBhZ2VMaXN0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGFyciA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMTY7IGkgPCA2NjsgaSsrKSB7XHJcbiAgICAgICAgYXJyLnB1c2goaSlcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJcclxufVxyXG5jb25zdCByZXdhcmRUeXBlVGV4dCA9ICgpID0+IHtcclxuICAgIGxldCB0ZXh0ID0gJydcclxuICAgIHN3aXRjaCAobnVtYmVyKSB7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICB0ZXh0ID0gJ+aXtidcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICB0ZXh0ID0gJ+aXpSdcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICB0ZXh0ID0gJ+aciCdcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGV4dCA9ICcnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ+WFgy/kurovJyArIHRleHRcclxufVxyXG5jb25zdCB3eFNob3dNb2RhbCA9ICh0aXRsZSwgY29udGVudCwgY29uZmlybVRleHQpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb3ZlLCByZWpjZXQpID0+IHtcclxuICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUgfHwgJ+aTjeS9nOaPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OiBjb25maXJtVGV4dCB8fCAn56Gu5a6aJyxcclxuICAgICAgICAgICAgY2FuY2VsQ29sb3I6ICcjNjY2NjY2JyxcclxuICAgICAgICAgICAgY29uZmlybUNvbG9yOiAnIzE4OTBGRicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb3ZlKClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamNldCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5jb25zdCBnZXRMaXN0ID0gKGxpc3QsIGtleSwgZm9ybWF0VHlwZSkgPT4ge1xyXG4gICAgbGV0IHR5cGUgPSBmb3JtYXRUeXBlIHx8ICdZWVlZLU1NLUREJ1xyXG4gICAgcmV0dXJuIGxpc3QubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIGxldCBmbGFnXHJcbiAgICAgICAgbGV0IHJlZyA9IC9eWzAtOV0rLj9bMC05XSokL1xyXG4gICAgICAgIGlmIChpdGVtW2tleV0gJiYgcmVnLnRlc3QoaXRlbVtrZXldKSkge1xyXG4gICAgICAgICAgICBmbGFnID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtW2tleV0gPSBmbGFnID8gJG1vbWVudC51bml4KGl0ZW1ba2V5XSkuZm9ybWF0KHR5cGUpIDogJG1vbWVudChpdGVtW2tleV0pLmZvcm1hdCh0eXBlKVxyXG4gICAgICAgIHJldHVybiBpdGVtXHJcbiAgICB9KVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgbWFuZ2xpbmdGb3JtYXRDYXJkTnVtYmVyOiBtYW5nbGluZ0Zvcm1hdENhcmROdW1iZXIsXHJcbiAgICB2YWxpZGF0ZUlkQ2FyZDogdmFsaWRhdGVJZENhcmQsXHJcbiAgICBjaGVja01vYmlsZTogY2hlY2tNb2JpbGUsXHJcbiAgICBnZXRFcnJvclRpcDogZ2V0RXJyb3JUaXAsXHJcbiAgICBnZXRJbWdVcmw6IGdldEltZ1VybCxcclxuICAgIHd4VG9hc3Q6IHd4VG9hc3QsXHJcbiAgICBjb21wcmVzc0ltZzogY29tcHJlc3NJbWcsXHJcbiAgICB3eE5hdmlnYXRlVG86IHd4TmF2aWdhdGVUbyxcclxuICAgIHd4UmVkaXJlY3RUbzogd3hSZWRpcmVjdFRvLFxyXG4gICAgd3hSZUxhdW5jaDogd3hSZUxhdW5jaCxcclxuICAgIGdldEFycmF5OiBnZXRBcnJheSxcclxuICAgIGdldEtleVZhbHVlOiBnZXRLZXlWYWx1ZSxcclxuICAgIHdlZWtMaXN0OiB3ZWVrTGlzdCxcclxuICAgIGFnZUxpc3Q6IGFnZUxpc3QsXHJcbiAgICByZXdhcmRUeXBlVGV4dDogcmV3YXJkVHlwZVRleHQsXHJcbiAgICB3eFNob3dNb2RhbDogd3hTaG93TW9kYWwsXHJcbiAgICBnZXRMaXN0OiBnZXRMaXN0XHJcbn07XHJcbiJdfQ==