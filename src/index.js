import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import PostContextProvider from './Context/PostContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <PostContextProvider> */}
    <App />
    {/* </PostContextProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
 