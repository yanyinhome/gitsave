import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import * as actionCreators from '../actions';

/**
 * 创建store
 * @param  {[type]} initialState [description]
 * @return {[type]}              [description]
 */
export default function configureStore(initialState) {
  const store = createStore(reducer,initialState,
    //redux调试代码
    window.devToolsExtension && window.devToolsExtension({ actionCreators }),
    applyMiddleware(thunk)
  );

  //热加载,及时跟新reducer
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
