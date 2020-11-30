import React from 'react';
import ReactDOM from 'react-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Provider } from 'react-redux';

import './index.css';
import { store } from './redux/store/store';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

