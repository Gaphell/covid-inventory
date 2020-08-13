import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    FormGenerator
} from "react-reactive-form";
import { SignInConfig } from "./authConfig";
import API from '../../service/api.service';
import { MySnackbarContentWrapper } from '../../shared/snackbar/snackbar';
import Snackbar from '@material-ui/core/Snackbar';
import GlobalStore from '../../store/globalStore';

function StayHomeStaySafe() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            Stay home, Stay safe
        </Typography>
    );
}

export default class Auth extends Component{

    state = {
        open: false,
    };

    handleClick = () => {
        GlobalStore.setSnackbar({
            variant: "success",
            message: "This is success message"
        })
    };

    handleWarn = () => {
        GlobalStore.setSnackbar({
            variant: "warning",
            message: "This is a warning"
        })
    };

    handleInfo = () => {
        GlobalStore.setSnackbar({
            variant: "info",
            message: "This is an information"
        })
    };

    handleError = () => {
        GlobalStore.setSnackbar({
            variant: "error",
            message: "This is error message"
        })
    };

    handleReset=() => {
        this.loginForm.reset();
    };

    handleSubmit=(e) => {
        e.preventDefault();
        if (this.loginForm.valid) {
            // API('POST', 'login', this.loginForm.value, '').subscribe(res => {
            //     localStorage.setItem('token', res.token);
            //     this.props.history.push('/home');
            // }, err => {
            //
            // });
            this.props.history.push('/home');
        } else {
            this.loginForm.markAsTouched();
        }
        console.log("Form values", this.loginForm.value);
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

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={this.classes.paper}>
                    <Avatar className={this.classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={this.classes.form} noValidate onSubmit={this.handleSubmit}>
                        <FormGenerator onMount={this.setForm} fieldConfig={SignInConfig}/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={this.classes.submit}
                        >
                            Sign In
                        </Button>
                        <Link href="#" variant="body2">
                            {"Click here to Register"}
                        </Link>
                    </form>
                </div>
                <Box mt={5}>
                    <StayHomeStaySafe/>
                </Box>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.handleClick}
                    className={this.classes.submit}
                >
                    success
                </Button>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.handleWarn}
                    className={this.classes.submit}
                >
                    warn
                </Button>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.handleError}
                    className={this.classes.submit}
                >
                    error
                </Button>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.handleInfo}
                    className={this.classes.submit}
                >
                    info
                </Button>
            </Container>
        );
    }
}