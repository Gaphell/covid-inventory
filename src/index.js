import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./core/routes";
import { CustomTheme } from './core/theme'
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/styles';
import SnackbarContainer from "./shared/snackbar/snackbar";
import './assets/stylesheets/utility.scss'

ReactDOM.render(<ThemeProvider theme={CustomTheme}><Routes/><SnackbarContainer/></ThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();
