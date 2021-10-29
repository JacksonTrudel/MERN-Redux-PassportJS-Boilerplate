import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementCounter } from '../redux/actions/LoginActions';


// styles
const styles = {
    jumbotron: {
        backgroundColor: '#FF865E',
        color: '#FEF9EF',
        borderRadius: '15px',
    },
    menuOption: {
        margin: '0 10px'
    }
};

function PageNotFound(props) {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    console.log('COUTNER: ' + JSON.stringify(counter))
    return (
        <div className="page-not-found">
            <div className="jumbotron" style={styles['jumbotron']}>
                <h1>counter: {counter}</h1>
                <h1 className="display-4">Page not found!</h1>
                <p className="lead">The page you are looking for does not exist.</p>
                <hr className="my-4" />
                <div className="action-button-small" onClick={() => dispatch(incrementCounter(1))}>Sign in</div>
                <Link to='/homepage' className="action-button-large" onClick={() => dispatch(incrementCounter(1))}>Go to homepage</Link>
            </div>
        </div>);
}

export default PageNotFound;