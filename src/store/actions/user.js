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
export const getAllUser = createAction(GETALLUSER, (openid) => {
    return new Promise((resolve, reject) => {
        $http('/login/is_autologin', {
            openid
        }).then(res => {
            resolve(res.data);
        }).catch(error => {
            reject(error.status)
        })
    })
})
