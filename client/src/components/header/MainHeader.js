import PropTypes from 'prop-types';
import '../../css/MainHeader.css';
import '../../App.css';
import SignInHeaderRow from './SignInHeaderRow';

function MainHeader({ login, setLogin }) {
    return (
        <>
            <SignInHeaderRow loggedIn={false} login={login} setLogin={setLogin} />
        </>
    );
}

MainHeader.propTypes = {
    login: PropTypes.object,
    setLogin: PropTypes.func
};

export default MainHeader;
