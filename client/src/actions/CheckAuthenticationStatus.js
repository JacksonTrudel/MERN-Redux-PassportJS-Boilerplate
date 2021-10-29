import axios from 'axios';

export default function checkAuthenticationStatus(setUser) {
    // try to access protected route     
    axios.post('http://localhost:8082/accounts/user', null, { withCredentials: true })
        .then(res => {
            // Account successfully created
            if (res.status === 200 && res.data.user.loggedIn !== false) {
                setUser(res.data.user);
            }
        }).catch((error) => {
            alert("Unexpected error. Could not check authentication.");
            console.log(error);
        });
};