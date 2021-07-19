import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import Router from './Router';

import './index.css';

ReactDOM.render(
  <>
    <Router />
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();

reportWebVitals();
