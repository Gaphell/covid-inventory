import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import amber from '@material-ui/core/colors/amber';

export const CustomTheme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: amber,
    },
    status: {
        danger: 'orange',
    },
});
