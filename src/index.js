import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'mobx-react';
import {BrowserRouter} from 'react-router-dom';

import imgSearch from './stores/imgSearch'

ReactDOM.render(
  <BrowserRouter>
  <Provider imgSearch = {imgSearch}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
