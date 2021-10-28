import { useState } from 'react';
import PropTypes from 'prop-types';
import createAccount from '../../actions/CreateAccount';
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

function CreateAccountPage({ login, setLogin }) {
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
        createAccount(userInfo, setUserInfo, setLogin);
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
    setLogin: PropTypes.func
};

export default CreateAccountPage;