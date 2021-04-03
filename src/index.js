import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'mobx-react';

import imgSearch from './stores/imgSearch'

ReactDOM.render(
  <Provider imgSearch = {imgSearch}>
    <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
