// import wepy from 'wepy';
// console.log(wepy)
// const baseUrl = wepy.$appConfig.baseUrl;
const manglingFormatCardNumber = (cardNumber) => {
    if (cardNumber && cardNumber.length > 8) {
        return `${cardNumber.substring(0, 4)} ${'*'
      .repeat(cardNumber.length - 8)
      .replace(/(.{4})/g, `
        $1 `)}${
      cardNumber.length % 4 ? ' ' : ''
    }${cardNumber.slice(-4)}`;
    }
    // eslint-disable-next-line semi
    return cardNumber
};
const validateIdCard = idCard => {
    var idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    var flag = false;
    // 如果通过该验证，说明身份证格式正确，但准确性还需计算
    if (idcardReg.test(idCard)) {
        flag = true;
    } else {
        flag = false;
    }
    return flag;
};

const checkMobile = mobile => {
    let reg = /^1[3456789]\d{9}$/;
    let flag = false;
    if (!reg.test(mobile)) {
        flag = false;
    } else {
        flag = true;
    }
    return flag;
};
const getErrorTip = code => {
    let text = '联系客服人员：021-51991869，\n 微信：18621532378 QQ：529350865';
    let obj = {
        title: '',
        subTitle: ''
    }
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
const getImgUrl = imgUrl => {
    const baseUrl = 'https://a.rsd123.com/'
    // const baseUrl = 'http://tiantianxsg.com:39888/'
    return baseUrl + imgUrl;
};
const compressImg = (photoSrc, ratio = 2) => {
    let obj = {
        url: '',
        cWidth: 0,
        cHeight: ''
    }
    return new Promise((resolve, reject) => {
        wx.getImageInfo({
            src: photoSrc,
            success(res) {
                let canvasWidth = res.width // 图片原始长宽
                let canvasHeight = res.height
                console.log(res)
                canvasWidth = 300
                canvasHeight = 200
                obj.cWidth = canvasWidth + 100
                obj.cHeight = canvasHeight + 100
                // ----------绘制图形并取出图片路径--------------
                var ctx = wx.createCanvasContext('canvas')
                ctx.drawImage(res.path, 0, 0, canvasWidth, canvasHeight)
                ctx.draw(
                    false,
                    setTimeout(() => {
                        wx.canvasToTempFilePath({
                                canvasId: 'canvas',
                                destWidth: canvasWidth,
                                destHeight: canvasHeight,
                                success: function (res) {
                                    console.log(res.tempFilePath)
                                    obj.url = res.tempFilePath
                                    resolve(obj)
                                },
                                fail: function (res) {
                                    console.log(res.errMsg)
                                }
                            },
                            this
                        )
                    }, 100)
                )
            },
            fail: function (res) {
                console.log(res.errMsg)
            }
        })
    })
}
const wxToast = title => {
    return wx.showToast({
        title: title,
        icon: 'none',
        duration: 2000
    })
}
const wxNavigateTo = url => {
    setTimeout(() => {
        wx.navigateTo({
            url: url // 页面 A
        })
    }, 300)
}
const wxRedirectTo = url => {
    setTimeout(() => {
        wx.redirectTo({
            url: url // 页面 A
        })
    }, 300)
}
const wxReLaunch = url => {
    setTimeout(() => {
        wx.reLaunch({
            url: url // 页面 A
        })
    }, 300)
}
export const getArray = obj => {
    let arr = []
    for (let key in obj) {
        arr.push(obj[key])
    }
    return arr
}
export const getKeyValue = obj => {
    for (let key in obj) {
        if (key === 'job_array') {
            obj[key] = getArray(obj[key])
        }
    }
    return obj
}
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
    getKeyValue: getKeyValue
};
