import { useState } from 'react';
import createAccount from '../../actions/CreateAccount';
import '../../App.css';
import '../../css/SignInPage.css';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../redux/actions/LoginActions';

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

function CreateAccountPage() {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
    });
    const user = useSelector((state) => state.user);

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

    const dispatch = useDispatch();
    function submit(event) {
        event.preventDefault();
        // validation
        createAccount(userInfo, setUserInfo, (userInfo) => dispatch(setLogin(userInfo)));
    }

    if (user.loggedIn) {
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

export default CreateAccountPage;