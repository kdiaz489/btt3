import styles from '../styles/login.module.css';
import { useAuth } from '../lib/auth';
import { Firebase, auth, firestore } from '../lib/firebaseClient';

const LoginForm = ({ modalContent, setModalContent }) => {
  const fbAuth = useAuth();
  return (
    <div className={styles.container}>
      <h1 style={{ fontFamily: 'Graduate' }}>Beyond The Talk</h1>
      <h1 style={{ fontFamily: 'Graduate' }}>Login</h1>

      <div className={styles.fastLoginButton}>
        <button
          onClick={(e) => {
            fbAuth.signinWithGoogle();
          }}
          style={{ backgroundColor: 'transparent', border: 'none' }}>
          <img src='/assets/google.svg' alt='Sign up with Google' />
        </button>

        <button style={{ backgroundColor: 'transparent', border: 'none' }}>
          <img
            src='/assets/login-form-facebook.svg'
            alt='Sign in with facebook'
          />
        </button>
      </div>

      <form action=''>
        <div className={styles.formGroup}>
          <input
            className={styles.input}
            type='email'
            name='email'
            id='email'
            placeholder='Email'
          />
        </div>

        <div className={styles.formGroup}>
          <input
            className={styles.input}
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
        </div>

        <div className={styles.smallText}>
          <p>
            <input type='checkbox' name='stayloggedin' id='stayloggedin' />
            Stay Logged in
          </p>
          <a href='http://localhost:3000/'> Forgot password?</a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className={styles.submitButton} type='submit'>
            LOGIN
          </button>
        </div>

        <div className={styles.createAccount}>
          <button onClick={(e) => setModalContent('register')}>
            {' '}
            Create an Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
