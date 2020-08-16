import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "./core/routes";
import { CustomTheme } from './core/theme'
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/styles';
import SnackbarContainer from "./shared/snackbar/snackbar";

ReactDOM.render(<ThemeProvider theme={CustomTheme}><Routes/><SnackbarContainer/></ThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();