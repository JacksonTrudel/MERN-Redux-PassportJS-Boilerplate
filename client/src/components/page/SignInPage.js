import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import '../../App.css';
import '../../css/SignInPage.css';
import isEmpty from 'is-empty';

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

function SignInPage({ loginToken, setLoginToken }) {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
    });
    const [showWrongComboMessage, setShowWrongComboMessage] = useState(false);

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
        setShowWrongComboMessage(false);

        // validation
        if (isEmpty(userInfo.username) || isEmpty(userInfo.password)) {
            alert("Enter a username and password");
            return;
        }
        else if (!Validator.isLength(userInfo.password, { min: 6, max: 30 })) {
            alert("Passwords are 6-30 characters long");
            return;
        }

        // attempt sign in
        axios.post('http://localhost:8082/accounts/login', userInfo, { withCredentials: true })
            .then(res => {
                setUserInfo({
                    username: '',
                    password: ''
                });
                if (res.status === 200) {
                    console.log("success");
                }
                else {
                    alert("Error: could not log into account");
                }
            })
            .catch((error) => {
                alert("Error: could not log in");
                console.log(error);
            });
    }

    return (
        <div className="signin-card">
            <div className="signin-card-content">
                {showWrongComboMessage && (
                    <div>WRONG COMBO</div>
                )}
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
                    <div className="action-button-small" style={styles['loginButton']} onClick={submit}>Sign in</div>
                </div>
            </div >
        </div >);
}

SignInPage.propTypes = {
    loginToken: PropTypes.object,
    setLoginToken: PropTypes.func,
};

export default SignInPage;