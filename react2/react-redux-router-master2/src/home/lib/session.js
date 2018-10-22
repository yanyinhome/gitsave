/**
 * session 帮助类
 */
class sessionUtil {
 /**
  * session前缀
  * @return {[type]} [description]
  */
 static _key = (key) => {
   return "ltn_" + key;
 }

 /**
  * 根据key获取session
  * @param  {[type]} key [description]
  * @return {[type]}     [description]
  */
 static get = (key) => {
   return sessionStorage.getItem(sessionUtil._key(key));
 }

 /**
  * 设置session
  * @param  {[type]} key [description]
  * @param  {[type]} val [description]
  * @return {[type]}     [description]
  */
 static set = (key, val) => {
   return sessionStorage.setItem(sessionUtil._key(key), val);
 }

 /**
  * 删除指定的session
  * @param  {[type]} key [description]
  * @return {[type]}     [description]
  */
 static del = (key) => {
   return sessionStorage.removeItem(sessionUtil._key(key));
 }

 /**
  * 清空session
  * @return {[type]} [description]
  */
 static clear = () => {
   return sessionStorage.clear();
 }
}
export default sessionUtil;
