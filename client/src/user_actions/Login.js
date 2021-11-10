import axios from 'axios';

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