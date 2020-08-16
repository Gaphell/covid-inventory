import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    FormGenerator
} from "react-reactive-form";
import {SignInConfig, DeliverySignupConfig, ManagerSignUp} from "./authConfig";
import API from '../../service/api.service';
import GlobalStore from '../../store/globalStore';
import AuthService from "./service/authService";

function StayHomeStaySafe() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            Stay home, Stay safe
        </Typography>
    );
}

export default class Auth extends Component {

    action = null;

    authConfig = {
        "signin": {
            config: SignInConfig,
            buttonLabel: 'SignIn',
            title: 'Sign In'
        },
        "delivery-signup": {
            config: DeliverySignupConfig,
            buttonLabel: 'Register',
            title: 'Delivery Support Register'
        },
        "signup": {
            config: ManagerSignUp,
            buttonLabel: 'SignUp',
            title: 'Stock Manager Register'
        }
    };

    currentAuthConfig = SignInConfig;

    buttonLabel = 'SignIn';

    title = 'Sign In';

    userLoggedInNotification = () => {
        GlobalStore.setSnackbar({
            variant: "success",
            message: "User logged in successfully"
        })
    };

    setAuth = () => {
        GlobalStore.setAuth(AuthService.isAuthenticed);
    };

    handleReset = () => {
        this.loginForm.reset();
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.loginForm.valid) {
            API('POST', 'users/sign_in', {user: this.loginForm.value}).subscribe(response => {
                AuthService.login(response.headers.authorization);
                AuthService.setUser(JSON.stringify(response.data.user));
                this.userLoggedInNotification();
                this.setAuth();
                this.props.history.push('/orders')
            }, err => {
                this.props.history.push('/');
            });
        } else {
            this.loginForm.markAsTouched();
        }
        console.log("Form values", this.loginForm.value);
    };

    goToSignup = (action) => {
        this.props.history.push(`/auth/${action}`)
    };

    setForm = (form) => {
        this.loginForm = form;
        this.loginForm.meta = {
            handleReset: this.handleReset
        }
    };

    classes = makeStyles(theme => ({
        '@global': {
            body: {
                backgroundColor: theme.palette.common.white,
            },
        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    componentDidMount() {

    }

    updateCurrentAction = () => {
        this.action = (this.props && this.props.match && this.props.match.params && this.props.match.params.action) || 'signin';
        this.currentAuthConfig = this.authConfig[this.action].config;
        this.buttonLabel = this.authConfig[this.action].buttonLabel;
        this.title = this.authConfig[this.action].title;
    };

    render() {
        this.updateCurrentAction();
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={this.classes.paper}>
                    <Avatar className={this.classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {this.title}
                    </Typography>
                    <form className={this.classes.form} noValidate onSubmit={this.handleSubmit}>
                        <FormGenerator onMount={this.setForm} fieldConfig={this.currentAuthConfig}/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={this.classes.submit}
                        >
                            {this.buttonLabel}
                        </Button>
                        {(this.action !== "signup") ?
                            (<Link href="" variant="body2" onClick={this.goToSignup.bind(this, 'signup')}>
                                {"Click here to Register as Stock Manager"}
                            </Link>) : ''
                        }
                        {(this.action !== "delivery-signup") ?
                            (<Link href="" variant="body2" onClick={this.goToSignup.bind(this, 'delivery-signup')}>
                                {"Click here to Register as Delivery Support"}
                            </Link>) : ''
                        }
                        {(this.action !== "signin") ?
                            (<Link href="" variant="body2" onClick={this.goToSignup.bind(this, 'signin')}>
                                {"Go back to SignIn"}
                            </Link>) : ''
                        }
                    </form>
                </div>
                <Box mt={5}>
                    <StayHomeStaySafe/>
                </Box>
            </Container>
        );
    }
}
