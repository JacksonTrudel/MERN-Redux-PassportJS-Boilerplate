import axios from 'axios';
import { validateCreateAccountInput } from '../validation/create-account-validation';
import login from './Login';

export default function createAccount(userInfo, setLogin) {
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
    axios.post('http://localhost:8082/accounts', userInfo)
        .then(res => {
            // Account successfully created
            if (res.status === 200) {
                if (res.data.failed === "username_taken") {
                    alert("Username already taken.");
                }
                else {
                    const user = {
                        loggedIn: true,
                        username: userInfo.username
                    };

                    // setLogin dispatches redux store setLogin
                    login(userInfo, () => { }, setLogin);

                    // store cookie to retrieve login status 
                    // -> not used to auth. users on protected routes
                    localStorage.setItem('user', JSON.stringify(user));
                    alert('Account created successfully');
                }
            }
        }).catch((error) => {
            alert("Unexpected error. Could not create account");
            console.log(error);
        });
};