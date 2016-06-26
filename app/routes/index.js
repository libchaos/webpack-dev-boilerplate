import React from 'react';
//Route indexRoute(首页默认路由)
//Router Route IndexRoute

//容器  和 基础组件 （展示组件）
import { IndexRoute, Route } from 'react-router';

import {
  App,
  Home,
  About,
  Profile
} from '../containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    {/*this.props.params.username*/}
    <Route path="profile/:username" component={Profile} />
  </Route>
)

// '/' -> app + home
// '/about' -> app + about

//'profile/libchaos' -> app + profile
