import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {getRequest} from './Utils.js';

// const reqParams = {
//   url: 'localhost:8000/requestToken?email=mucketbucket@gmail.com&password=12345678',

// }
const response = getRequest('localhost:8000/requestToken?email=mucketbucket@gmail.com&password=12345678');
const element = <p>{response}</p>
ReactDOM.render(
  element,
  document.getElementById('root')
);
