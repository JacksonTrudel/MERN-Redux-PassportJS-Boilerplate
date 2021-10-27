import axios from 'axios';

export default function login(userInfo, setLogin, setUserInfo) {
    // attempt sign in
    axios.post('http://localhost:8082/accounts/login', userInfo, { withCredentials: true })
        .then(res => {
            if (res.status === 200) {
                const user = {
                    loggedIn: true,
                    username: userInfo.username
                };
                setUserInfo({
                    username: '',
                    password: ''
                });
                setLogin(user);
                localStorage.setItem('username', user.username);
                localStorage.setItem('loggedIn', user.loggedIn);
            }
            else {
                setUserInfo({
                    username: '',
                    password: ''
                });
                alert("Error: could not log into account");
            }
        })
        .catch((error) => {
            alert("Error: could not log in");
            console.log(error);
        });
};