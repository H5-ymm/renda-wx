import {
    GETALLUSER
} from '../types/user';
import {
    createAction
} from 'redux-actions';
import {
    $http
} from '@/http.js'
// 对象变数组
export const getAllUser = createAction(GETALLUSER, (data) => {
    return new Promise((resolve, reject) => {
        $http('/login/is_autologin', data).then(res => {
            wx.setStorageSync('phone', res.data.phone)
            saveUser(res.data.uid)
            resolve(res.data);
        }).catch(error => {
            reject(error.status)
        })
    })
})

export const saveUser = uid => {
    let userinfo = JSON.parse(wx.getStorageSync('wxInfo'))
    let params = {
        uid: uid,
        head_img:userinfo.head_img
      }
    $http('/userinfo/editUserInfo', params).then(res => {
      console.log(res)
    })
  }