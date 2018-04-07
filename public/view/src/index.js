import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {getRequest, debugTool, apiRequest} from './Utils.js';

// const reqParams = {
//   url: 'localhost:8000/requestToken?email=mucketbucket@gmail.com&password=12345678',

// }
const url = 'http://localhost:8000/fetchtoken?email=mucketbucket@gmail.com&password=12345678';
const response = apiRequest(url, 'GET');
const debug = debugTool;
const localStorage = window.localStorage;

response.then(function(data){
  const tokenString = JSON.stringify(data.token);
  localStorage.setItem('token', tokenString);
});




const element = <p>{debug.log(response)}</p>
ReactDOM.render(
  element,
  document.getElementById('root')
);
