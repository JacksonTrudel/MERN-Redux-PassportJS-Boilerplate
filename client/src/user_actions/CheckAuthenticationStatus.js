import axios from 'axios';

export default function checkAuthenticationStatus(callback) {
    // try to access protected route     
    axios.post('http://localhost:8082/accounts/user', null, { withCredentials: true })
        .then(res => {
            callback(res);
        }).catch((error) => {
            alert("Unexpected error. Could not check authentication.");
            console.log(error);
        });
};