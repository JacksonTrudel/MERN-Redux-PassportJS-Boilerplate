/* Specific styles in MainHeader.css */
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

function MainMenuHeaderRow({ loggedIn }) {
    console.log(`Logged in: ${loggedIn}`);
    return (
        <div className="mainmenu-header">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>
    );
}

MainMenuHeaderRow.propTypes = {
    loggedIn: PropTypes.bool
};

export default MainMenuHeaderRow;
