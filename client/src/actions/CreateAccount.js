import axios from 'axios';
import { validateCreateAccountInput } from '../validation/create-account-validation';

export default function createAccount(userInfo, setUserInfo, setLogin) {
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
                    setLogin({
                        loggedIn: true,
                        username: userInfo.username
                    });
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
};