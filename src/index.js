import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './Global';
import ResetCss from './Reset';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetCss/>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);