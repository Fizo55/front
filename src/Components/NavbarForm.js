import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RegisterForm from './RegisterForm'
import { withNamespaces } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function ButtonAppBar({ t }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        { process.env.REACT_APP_NAME }
                    </Typography>
                    <RegisterForm />
                    <Button color="inherit">{t('LOGIN')}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withNamespaces()(ButtonAppBar)