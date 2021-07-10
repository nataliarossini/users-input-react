import React from 'react';
import Wrapper from '../Helpers/Wrapper';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
const ErrorModal = props => {
    return(
        // react fragment does the same as wapper and <>
        // can also be <Fragment> if imported as React, { Fragment }
        <React.Fragment>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Ok</Button>
                </footer>
            </Card>
        </React.Fragment>
    )

};

export default ErrorModal;