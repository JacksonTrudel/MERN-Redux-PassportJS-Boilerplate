import { useState } from 'react';
import axios from 'axios';
import '../../App.css';
import '../../css/SignInPage.css';

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
        axios.post('http://localhost:8082/accounts',
            {
                ...userInfo,
                ideas: []
            }).then(res => {
                setUserInfo({
                    username: '',
                    password: ''
                });
                if (res.status !== 200) {
                    alert("could not create account");
                }
            }).catch((error) => {
                alert("could not create account");
                console.log(error);
            });
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