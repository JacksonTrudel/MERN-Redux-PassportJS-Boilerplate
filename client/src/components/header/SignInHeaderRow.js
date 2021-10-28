/* Specific styles in MainHeader.css */

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logout from '../../actions/Logout';
import '../../css/MainHeader.css';
import '../../App.css';

// styles
const styles = {
    menuOptionContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
    },
    menuOption: {
        margin: '0 10px'
    }
};

function SignInHeaderRow({ login, setLogin }) {
    return (
        <div className="signin-header">
            <div style={styles['menuOptionContainer']}>
                {login.loggedIn ?
                    (<>
                        <div>
                            <Link to="/my-account">My Account</Link>
                        </div>
                        <div style={styles['menuOption']}>
                            <Link to="/homepage" onClick={(event) => logout(event, setLogin)}>Log Out</Link>
                        </div>
                    </>) :
                    (<>
                        <div style={styles['menuOption']}>
                            <Link to="/sign-in">Sign In</Link>
                        </div>
                        <div style={styles['menuOption']}>
                            <Link to="/create-account">Create Account</Link>
                        </div>
                    </>)}
            </div>
        </div>
    );
}

SignInHeaderRow.propTypes = {
    login: PropTypes.object,
    setLogin: PropTypes.func
};

export default SignInHeaderRow;
