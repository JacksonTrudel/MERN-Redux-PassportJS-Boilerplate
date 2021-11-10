import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import checkAuthenticationStatus from '../../user_actions/CheckAuthenticationStatus';
import '../../App.css';

function CheckAuthStatusPage() {
    const [user, setUser] = useState({ loggedIn: false, username: '' });
    const login = useSelector((state) => state.user);

    // call only when component mounts
    useEffect(() => checkAuthenticationStatus(setUser), [setUser]);

    return (<>
        <div>Client-side login state: {JSON.stringify(login)}</div>
        <div>Server-side login state: {JSON.stringify(user)}</div>
    </>);
}


export default CheckAuthStatusPage;