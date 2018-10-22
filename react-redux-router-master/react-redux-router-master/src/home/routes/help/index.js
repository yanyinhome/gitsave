import React from 'react';
import {Route} from 'react-router'

export default (
    <div>
      <Route path='demo1' getComponent={(location, cb) => {
        require.ensure([], (require) => {
            cb(null, require('./demo1/containers'))
        },'demo1')
      }} />
      <Route path='demo2' getComponent={(location, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./demo2/containers'))
          },'demo2')
        }} />
    </div>
)
