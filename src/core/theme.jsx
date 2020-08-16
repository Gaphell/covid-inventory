import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

export const CustomTheme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
    },
    status: {
        danger: 'orange',
    },
});