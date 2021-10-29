import axios from 'axios';

export const LOGIN_RESULT = {
    SUCCESS: 1,
    INCORRECT_COMBO: 2,
    REQUEST_FAILED: 3
}

export default function login(userInfo, setShowWrongComboMessage, setLogin) {
    // attempt sign in
    axios.post('http://localhost:8082/accounts/login', userInfo, { withCredentials: true })
        .then(res => {
            if (res.status === 200) {
                if (res.data.loggedIn) {
                    const user = {
                        loggedIn: true,
                        username: userInfo.username
                    };
                    setLogin(user);
                    window.location.reload(false);

                    // store cookie to retrieve login status 
                    // -> not used to auth. users on protected routes
                    localStorage.setItem('user', JSON.stringify(user));
                }
                else {
                    setShowWrongComboMessage(true);
                }
            }

        })
        .catch((error) => {
            console.log(error);
            alert("For an unknown reason you could not be logged in. Try again later");
        });
};