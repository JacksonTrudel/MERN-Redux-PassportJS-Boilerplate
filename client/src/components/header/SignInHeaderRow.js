/* Specific styles in MainHeader.css */

//import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/MainHeader.css';
import '../../App.css';

// styles
const styles = {
    menuOptionContainer: {
        height: '100%'
    },
    menuOption: {
        margin: '0 10px'
    }
};

function SignInHeaderRow({ loggedIn }) {
    console.log(`Logged in: ${loggedIn}`);
    return (
        <div className="signin-header">
            <ul class="nav d-flex justify-content-end align-items-center" style={styles['menuOptionContainer']}>
                {loggedIn ?
                    (<li class="nav-item">
                        <Link to="/my-account">My Account</Link>
                    </li>) :
                    (<>
                        <li class="nav-item m" style={styles['menuOption']}>
                            <Link to="/sign-in">Sign In</Link>
                        </li>
                        <li class="nav-item" style={styles['menuOption']}>
                            <Link to="/create-account">Create Account</Link>
                        </li>
                    </>)}
            </ul>
        </div>
    );
}

SignInHeaderRow.propTypes = {
    loggedIn: PropTypes.bool
};

export default SignInHeaderRow;
