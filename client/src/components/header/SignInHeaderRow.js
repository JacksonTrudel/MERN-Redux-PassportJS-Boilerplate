/* Specific styles in MainHeader.css */

//import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

function SignInHeaderRow({ loggedIn }) {
    console.log(`Logged in: ${loggedIn}`);
    return (
        <div className="signin-header">
            <div style={styles['menuOptionContainer']}>
                {loggedIn ?
                    (<div>
                        <Link to="/my-account">My Account</Link>
                    </div>) :
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
    loggedIn: PropTypes.bool
};

export default SignInHeaderRow;
