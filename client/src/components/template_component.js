//import PropTypes from 'prop-types';
import '../App.css'; // VERIFY IMPORT PATH

// styles
const styles = {
    sampleDiv: {
        height: '100%'
    },
};


function TemplateComponent(/*{ currentPage }*/) {
    //console.log(currentPage);
    return (<div>HelloWorld!</div>);
}

/* FOR PROPS
MainHeader.propTypes = {
    currentPage: PropTypes.string
};
*/

export default TemplateComponent;