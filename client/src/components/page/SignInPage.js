import '../../App.css';
import '../../css/SignInPage.css';

// styles
const styles = {
    formLabel: {
        paddingTop: '1%',
        width: '30%',
        textAlign: 'right',
    },
    formInput: {
        width: '60%',
    },
    loginButton: {
    }
};

function SignInPage() {
    return (
        <div className="signin-card">
            <div className="signin-card-content">
                <form>
                    <div className="signin-form-row">
                        <div style={styles['formLabel']}>Username: </div>
                        <input style={styles['formInput']} type="text"></input>
                    </div>
                    <div className="signin-form-row">
                        <div style={styles['formLabel']}>Password: </div>
                        <input style={styles['formInput']} type="password"></input>
                    </div>
                    <div className="signin-form-row">
                        <div className="action-button-small" style={styles['loginButton']}>Log in</div>
                    </div>
                </form>
            </div >
        </div >);
}


export default SignInPage;