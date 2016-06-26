import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';

let root = document.getElementById('app');
// render( <App />, root );
//使用browserHistory webpack + history-api-fallback
render(
  <Router
  routes={routes}
  history={browserHistory}
  />, root
);
