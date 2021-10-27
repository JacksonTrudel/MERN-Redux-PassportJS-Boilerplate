import '../App.css';
import { Link } from 'react-router-dom';

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

function PageNotFound() {
    return (
        <div className="page-not-found">
            <div className="jumbotron" style={styles['jumbotron']}>
                <h1 className="display-4">Page not found!</h1>
                <p className="lead">The page you are looking for does not exist.</p>
                <hr className="my-4" />
                <Link to='/homepage' className="action-button-large">Go to homepage</Link>
            </div>
        </div>);
}



export default PageNotFound;