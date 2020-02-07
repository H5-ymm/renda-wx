/* eslint-disable indent */
/* eslint-disable no-array-constructor */
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
    // 15位和18位身份证号码的正则表达式
    var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    var flag = false;
    // 如果通过该验证，说明身份证格式正确，但准确性还需计算
    if (regIdCard.test(idCard)) {
        if (idCard.length === 18) {
            // eslint-disable-next-line no-array-constructor
            var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); // 将前17位加权因子保存在数组里
            var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
            var idCardWiSum = 0; // 用来保存前17位各自乖以加权因子后的总和
            for (var i = 0; i < 17; i++) {
                idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
            }
            var idCardMod = idCardWiSum % 11; // 计算出校验码所在数组的位置
            var idCardLast = idCard.substring(17); // 得到最后一位身份证号码
            // 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
            if (idCardMod === 2) {
                if (idCardLast === 'X' || idCardLast === 'x') {
                    flag = true;
                } else {
                    flag = false;
                }
            } else {
                // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                if (idCardLast === idCardY[idCardMod]) {
                    flag = true;
                } else {
                    flag = false;
                }
            }
        }
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
            obj.title = '您的团队还在审核中哦';
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
module.exports = {
    manglingFormatCardNumber: manglingFormatCardNumber,
    validateIdCard: validateIdCard,
    checkMobile: checkMobile,
    getErrorTip: getErrorTip
};
