import axios from 'axios';

export default function logout(event, setLogin) {
    event.preventDefault();
    // attempt sign in
    axios.post('http://localhost:8082/accounts/logout', null, { withCredentials: true })
        .then(res => {
            if (res.status === 200) {
                if (res.data.error) {
                    alert("Unexpected Error: could not log out: " + res.data.message);
                    console.log(res.data.message);
                }
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