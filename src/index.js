import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './state/app';
import Main from './Main';
import './styles/Main.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
