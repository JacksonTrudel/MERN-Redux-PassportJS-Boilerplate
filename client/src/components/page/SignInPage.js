import { useState } from 'react';
import PropTypes from 'prop-types';
import loginAction from '../../actions/login';
import Validator from 'validator';
import '../../App.css';
import '../../css/SignInPage.css';
import isEmpty from 'is-empty';
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
    alreadySignedInText: {
        color: '#000000',
        margin: '2% auto 0',
    },
    logOutButton: {
        margin: '0 auto 3%'
    }
};

function SignInPage({ login, setLogin }) {
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
        loginAction(userInfo, setLogin, setUserInfo);
    }

    // redirect on homepage if already signed in
    if (login.loggedIn) {
        return (<Redirect to="/homepage" />);
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
                    <div className="action-button-small" onClick={submit}>Sign in</div>
                </div>
            </div >
        </div >);
}

SignInPage.propTypes = {
    login: PropTypes.object,
    setLogin: PropTypes.func,
};

export default SignInPage;