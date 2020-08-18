import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles, styled} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';


import {
    FormGenerator
} from "react-reactive-form";
import {SignInConfig, DeliverySignupConfig, ManagerSignUp} from "./authConfig";
import API from '../../service/api.service';
import GlobalStore from '../../store/globalStore';
import AuthService from "./service/authService";
import Grid from '@material-ui/core/Grid';

const MyButton = styled(({color, ...other}) => <Button {...other} />)({
    background: (props) =>
        props.color === 'red'
            ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
            : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: (props) =>
        props.color === 'red'
            ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
            : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '20px 0'
});

function StayHomeStaySafe() {
    return (
        <div className="info">
            <h1 align="center"> Lockdown Charo</h1>
            <img src={require('../../assets/images/cart.svg')} className="cart-img" alt="Cart Image"/>
            <p className="app-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio
                dolores enim sit veritatis. Accusamus alias animi aspernatur beatae consectetur culpa debitis delectus
                dicta dolor, doloremque explicabo facere magnam minima natus nemo, nesciunt numquam quibusdam ratione
                sapiente veniam voluptas voluptate.</p>
        </div>
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
        GlobalStore.setAuth(AuthService.isAuthenticated);
        // GlobalStore.setAuth(true);
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
            <Container component="main" className="auth-container">
                <div className='auth-content'>
                    <CssBaseline/>
                    <div className={this.classes.paper}>
                        <Grid container className="auth-grid">
                            <Grid item md={5} sm={12}>

                                <div className="form-card">
                                    <h1>
                                        {this.title}
                                    </h1>
                                    <form className={this.classes.form} noValidate onSubmit={this.handleSubmit}>
                                        <FormGenerator onMount={this.setForm} fieldConfig={this.currentAuthConfig}/>
                                        <React.Fragment>
                                            <MyButton fullWidth color="blue"
                                                      type="submit"
                                                      variant="contained"
                                                      className={this.classes.submit}>{this.buttonLabel}</MyButton>
                                        </React.Fragment>
                                        <h3>Don't have an account?</h3>
                                        <div className="mt-12">
                                            {(this.action !== "signup") ?
                                                (<Chip color='primary'
                                                       label="Register as Stock Manager" component="a" href="#chip"
                                                       clickable variant="outlined"
                                                       onClick={this.goToSignup.bind(this, 'signup')}/>)
                                                : ''
                                            }
                                        </div>
                                        <div className="mt-16">
                                            {(this.action !== "delivery-signup") ?
                                                (<Chip color='primary'
                                                       label="Register as Delivery Support" component="a" href="#chip"
                                                       clickable variant="outlined"
                                                       onClick={this.goToSignup.bind(this, 'delivery-signup')}/>) : ''
                                            }
                                        </div>
                                        <div className="mt-12">
                                            {(this.action !== "signin") ?
                                                (<Link href="" variant="body2"
                                                       onClick={this.goToSignup.bind(this, 'signin')}>
                                                    {"Back to Sign In"}
                                                </Link>) : ''
                                            }
                                        </div>
                                    </form>
                                </div>
                            </Grid>
                            <Grid item sm={12} md={7}>
                                <div className="auth-info">
                                    <StayHomeStaySafe/>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        );
    }
}
