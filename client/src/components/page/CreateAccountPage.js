import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { validateCreateAccountInput } from '../../validation/create-account-validation';
import '../../App.css';
import '../../css/SignInPage.css';
import { Redirect } from 'react-router';

// styles
const styles = {
    formLabel: {
        paddingTop: '1%',
        width: '30%',
        textAlign: 'right',
    },
    formInput: {
        width: '60%',
    },
    loginButton: {
    }
};

function CreateAccountPage({ login }) {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setUserInfo(prevInput => {
            return (
                {
                    ...prevInput,
                    [name]: value,
                }
            )
        });
    }

    function submit(event) {
        event.preventDefault();
        // validation
        const validationResult = validateCreateAccountInput(userInfo);
        if (!validationResult.isValid) {
            if (validationResult.errors.username) {
                alert(validationResult.errors.username);
                return;
            }
            else if (validationResult.errors.password) {
                alert(validationResult.errors.password);
                return;
            }
        }

        // try to create new account        
        axios.post('http://localhost:8082/accounts',
            {
                ...userInfo,
                ideas: []
            }).then(res => {
                // Account successfully created
                if (res.status === 200) {
                    if (res.data.failed === "username_taken") {
                        alert("Username already taken.");
                    }
                    else {
                        setUserInfo({
                            username: '',
                            password: ''
                        });
                        alert('Account created successfully');
                    }
                }
            }).catch((error) => {
                alert("Unexpected error. Could not create account");
                console.log(error);
            });
    }

    if (login.loggedIn) {
        return (<Redirect to="/homepage" />);
    }

    return (
        <div className="signin-card">
            <div className="signin-card-content">
                <div className="signin-form-row">
                    <div style={styles['formLabel']}>Username: </div>
                    <input
                        style={styles['formInput']}
                        type="text" onChange={handleChange}
                        value={userInfo.username}
                        name="username">
                    </input>
                </div>
                <div className="signin-form-row">
                    <div style={styles['formLabel']}>Password: </div>
                    <input
                        style={styles['formInput']}
                        type="password"
                        onChange={handleChange}
                        value={userInfo.password}
                        name="password">
                    </input>
                </div>
                <div className="signin-form-row">
                    <div className="action-button-small" style={styles['loginButton']} onClick={submit}>Create Account</div>
                </div>
            </div >
        </div >);
}

CreateAccountPage.propTypes = {
    login: PropTypes.object,
};

export default CreateAccountPage;