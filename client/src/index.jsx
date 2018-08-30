import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './_styles/style.scss';
import store from './_helpers/store';
import { App } from './App';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(<Provider store={store.store}><PersistGate loading={null} persistor={store.persistedStore}><App /></PersistGate></Provider>, document.getElementById('app'))