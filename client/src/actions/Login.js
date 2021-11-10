import axios from 'axios';

export const LOGIN_RESULT = {
    SUCCESS: 1,
    INCORRECT_COMBO: 2,
    REQUEST_FAILED: 3
}

export default function login(userInfo, callback) {
    // attempt sign in
    return axios.post('http://localhost:8082/accounts/login', userInfo, { withCredentials: true })
        .then(res => {
            callback(res);
        })
        .catch((error) => {
            console.log(error);
            alert("For an unknown reason you could not be logged in. Try again later");
        });
};