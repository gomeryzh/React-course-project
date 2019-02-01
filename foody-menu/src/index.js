import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './redux/store';

import Loader from './components/Loader/Loader';

import App from './App';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.querySelector('#root'),
);
