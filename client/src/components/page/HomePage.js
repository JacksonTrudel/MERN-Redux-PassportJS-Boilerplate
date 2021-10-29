import { useSelector } from 'react-redux';
import '../../App.css';

function HomePage() {
    const login = useSelector((state) => state.user);
    if (login.loggedIn) {
        return <div>Hi, {login.username}!</div>
    }
    return (<div>Please sign in!!</div>);
}


export default HomePage;