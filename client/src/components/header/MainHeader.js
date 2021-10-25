import PropTypes from 'prop-types';
import '../../css/MainHeader.css';
import '../../App.css';
import SignInHeaderRow from './SignInHeaderRow';

function MainHeader({ currentPage }) {
    console.log(currentPage);
    return (
        <>
            <SignInHeaderRow loggedIn={false} />
        </>
    );
}

MainHeader.propTypes = {
    currentPage: PropTypes.string
};

export default MainHeader;
