import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import App from '../containers/'

import helpRouter from '../routes/help';//help路由
/**
 * (路由根目录组件，显示当前符合条件的组件)
 *
 * @class Roots
 * @extends {Component}
 */
class Roots extends Component {
    render() {
        return (
            <div>
              {this.props.children}
            </div>
        );
    }
}
// var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={Roots}>
            <IndexRoute component={App} />
            // help路由
            {helpRouter}
        </Route>
    </Router>
);

export default RouteConfig;
