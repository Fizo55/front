import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import "font-awesome/css/font-awesome.css";
import loadjs from 'loadjs'
import Recaptcha from 'react-recaptcha'
import Register from '../Auth/Register';
import { loadCSS } from "fg-loadcss/src/loadCSS";
import classNames from "classnames";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function RegisterForm() {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [captchaToken, setCaptchaToken] = React.useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const verifyCallback = function (response) {
        setCaptchaToken(response)
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();

    loadCSS("https://use.fontawesome.com/releases/v5.1.0/css/all.css", document.querySelector("#insertion-point-jss"));
    loadjs('https://www.google.com/recaptcha/api.js?render=explicit')

    function ExecRegister() {
        Register(firstName, email, password, lastName, captchaToken)
    }

    return (
        <div>
            <Button color="inherit" onClick={handleClickOpen}>
                REGISTER
            </Button>
            <Dialog open={open} onClose={handleClose} fullScreen={fullScreen} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                            <Icon className={classNames(classes.avatar, "fas fa-user")} />
                            <form className={classes.form} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            onChange={event => setFirstName(event.target.value)}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            name="firstName"
                                            autoComplete="fname"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            onChange={event => setLastName(event.target.value)}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={event => setEmail(event.target.value)}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={event => setPassword(event.target.value)}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                        />
                                    </Grid>
                                </Grid>
                                <Recaptcha
                                    sitekey={process.env.REACT_APP_SITE_KEY}
                                    render="explicit"
                                    verifyCallback={verifyCallback} />
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={ ExecRegister }
                                >
                                    Sign Up
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Container>
                </DialogContent>
            </Dialog>
        </div>
    );
}