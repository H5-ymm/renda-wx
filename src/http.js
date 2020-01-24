const apiUrl = 'http://tiantianxsg.com:39888/wx.php'; // 服务器api地址
const http = (url, params, method) => {
    // 返回promise 对象
    return new Promise((resolve, reject) => {
        wx.request({
            url: apiUrl + url, // 服务器url+参数中携带的接口具体地址
            data: params, // 请求参数
            header: {
                'Content-Type': 'application/x-www-form-urlencoded' // 设置后端需要的常用的格式就好，特殊情况调用的时候单独设置
            },
            method: method || 'POST', // 默认为GET,可以不写，如常用请求格式为POST，可以设置POST为默认请求方式
            success: function (res) {
                // 接口访问正常返回数据
                if (res.statusCode === 200) {
                    // 1. 操作成功返回数据,原则上只针对服务器端返回成功的状态（如本例中为000000）
                    if (res.data.status.code === 200) {
                        resolve(res.data);
                    } else {
                        wx.showToast({
                            icon: 'none',
                            title: res.data.status.remind
                        });
                        console.log(res.data);
                    }
                    // else if (params.url === '/order/result' && res.data.retCode === '800020') { // 支付结果未知      
                    //     // 需要特殊处理的接口，可以单独列出来返回数据
                    //     resolve(res.data);
                    // }

                } else {
                    // 2. 操作不成功返回数据，以toast方式弹出响应信息，如后端未格式化非操作成功异常信息，则可以统一定义异常提示
                    var errMsg = res.data.status.remind;

                    console.log(errMsg);
                }
            },
            fail: function (error) {
                reject(error);
            }
        });
    });
};
module.exports = {
    http: http
};
