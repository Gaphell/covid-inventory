import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "./core/routes";
import { CustomTheme } from './core/theme'
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/styles';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={CustomTheme}><Routes/></ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();