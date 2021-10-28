import PropTypes from 'prop-types';
import '../../App.css';

function HomePage({ login }) {
    if (login.loggedIn) {
        return <div>Hi, {login.username}!</div>
    }
    return (<div>Please sign in!!</div>);
}

HomePage.propTypes = {
    login: PropTypes.object
};


export default HomePage;