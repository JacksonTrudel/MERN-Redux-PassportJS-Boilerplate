import '../App.css';
import { Link } from 'react-router-dom';

// styles
const styles = {
    jumbotron: {
        backgroundColor: '#FF865E',
        color: 'white',
        borderColor: '#FEF9EF',
        border: '15px solid',
    },
    menuOption: {
        margin: '0 10px'
    }
};

function PageNotFound() {
    return (
        <div className="page-not-found">
            <div class="jumbotron" style={styles['jumbotron']}>
                <h1 class="display-4">Page not found!</h1>
                <p class="lead">The page you are looking for does not exist.</p>
                <hr class="my-4" />
                <Link to='/homepage' class="btn btn-primary btn-lg">Go to homepage</Link>
            </div>
        </div>);
}



export default PageNotFound;