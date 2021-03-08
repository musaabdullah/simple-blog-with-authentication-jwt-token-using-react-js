import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
// import PostContextProvider from './Context/PostContext';

axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    {/* <PostContextProvider> */}
    <App />
    {/* </PostContextProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
 