import { combineReducers } from 'redux'
import * as tool from 'publicJs';
import home from './home.js';//首页
import demo1 from './help/reducer/demo1.js';//demo1
import demo2 from './help/reducer/demo2.js';//demo2
/**
 * 合并多个reducer
 * @type {[type]}
 */
const reduxs= Object.assign({
    home,
    demo1,
    demo2
});

const reducer = combineReducers(reduxs);
export default reducer;
