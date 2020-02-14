import {
    createStore,
    applyMiddleware
} from '../lib/redux.js';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers'
export default function configStore() {
    const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));
    // 生成一个 store 对象
    return store;
}
