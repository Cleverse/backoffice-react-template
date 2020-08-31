import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'antd/dist/antd.css';
import './style/style.css';
import './style/App.css';
import './style/tailwind.css';
import { configure } from 'axios-hooks';
import LRU from 'lru-cache';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL || ''
});

const cache = new LRU({ max: 10 });

configure({ axios, cache });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
