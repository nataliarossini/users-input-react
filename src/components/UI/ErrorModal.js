import React from 'react';
import Wrapper from '../Helpers/Wrapper';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
const ErrorModal = props => {
    return(
        <Wrapper>
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
        </Wrapper>
    )

};

export default ErrorModal;