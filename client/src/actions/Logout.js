import axios from 'axios';

export default function logout(event, setLogin) {
    event.preventDefault();
    // attempt sign in
    axios.get('http://localhost:8082/accounts/logout', null, { withCredentials: true })
        .then(res => {
            if (res.status === 200) {
                setLogin({
                    loggedIn: false,
                    username: null
                });
                window.location.reload(false);
                localStorage.clear();
            }
            else {
                alert("Unexpected Error: could not log out");
            }
        })
        .catch((error) => {
            alert("Unexpected Error: could not log out");
            console.log(error);
        });
};