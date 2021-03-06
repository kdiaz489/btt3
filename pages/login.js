import styles from '../styles/login.module.css';
import { Firebase, auth, firestore } from '../lib/firebaseClient';


const Login = () => {
  const fbAuth = useAuth();
  const loginWithGoogle = () => {
    const provider = new Firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <button onClick={(e) => fbAuth.signinWithGoogle()}>
      Login With Google
    </button>
  );
};

const Logout = () => {
  return (
    auth.currentUser && <button onClick={(e) => auth.signOut()}>Log Out</button>
  );
};

const login = () => {
 
  return (

    <div className={styles.container}>
      
      <h1 style={{fontFamily: 'Graduate'}}>Beyond The Talk</h1>
      <h1 style={{fontFamily: 'Graduate'}}>Login</h1>

      <div className={styles.fastLoginButton }>
            <button style={{backgroundColor: 'transparent',  border: 'none'}}>
              <img src='/assets/google.svg' alt="Sign up with Google" />
            </button>

            <button style={{backgroundColor: 'transparent' , border: 'none'}}>
              <img src='/assets/login-form-facebook.svg' alt="Sign in with facebook" />
            </button>
      </div>

      <form action=''>
        <div className={styles.formGroup}>
        
          <input 
            className={styles.input}
            type='email'
            name='email'
            id='email'
            placeholder= "Email"
          />
        </div>

        <div className={styles.formGroup}>
          <input
            className={styles.input}
            type='password'
            name='password'
            id='password'
            placeholder= "Password"
          />
          </div>

          <div className={styles.smallText}>
              <p>
                <input
                  type='checkbox'
                  name='stayloggedin'
                  id='stayloggedin'
                  />Stay Logged in
              </p>
                <a href="http://localhost:3000/"> forgot password?</a>
          </div>
      
      
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className={styles.submitButton} type='submit'>
              LOGIN
            </button>
          </div>

          <div className={styles.createAccount}>
            <a href="http://localhost:3000/register"> Create an Account</a>
          </div>
        </form>
    </div>

    )

}


export default login;