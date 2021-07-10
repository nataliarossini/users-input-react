import React, { useState, useRef } from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import styles from './AddUser.module.css'

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid age'
            });
            return;
        }
        props.onAddUser(enteredname, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

        // setEnteredUsername('');
        // setEnteredAge('');
    }
    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }
    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        // value={enteredUsername} 
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input 
                        id="age" 
                        type="numer" 
                        // value={enteredAge} 
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;