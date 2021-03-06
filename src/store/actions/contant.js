import {
    GETALLCONTANT
} from '../types/contant';
import {
    createAction
} from 'redux-actions';
import {
    $http
} from '@/http.js'
// 对象变数组
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
export const getAllContant = createAction(GETALLCONTANT, (contant) => {
    return new Promise(resolve => {
        let filed = 'com_type,com_scale,job_array';
        $http('/index/getConstant', {
            filed
        }).then(res => {
            let newData = getKeyValue(res.data)
            resolve(newData);
        })
    })
})
