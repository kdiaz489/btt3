import styles from '../styles/register.module.css';

const RegisterForm = ({ modalContent, setModalContent }) => {
  return (
    <div className={styles.container}>
      <h1>Beyond The Talk</h1>
      <h2 font='graduate'>CREATE AN ACCOUNT</h2>

      <form action=''>
        <div className={styles.fastLoginButton}>
          <button style={{ backgroundColor: 'transparent', border: 'none' }}>
            <img src='/assets/google.svg' alt='Sign up with Google' />
          </button>
          <button style={{ backgroundColor: 'transparent', border: 'none' }}>
            <img
              src='/assets/login-form-facebook.svg'
              alt='Sign in with facebook'
            />
          </button>
        </div>

        <div className={styles.formGroup}>
          <input
            className={styles.input}
            type='First and Last Name'
            name='First and Last Name'
            id='First and Last Name'
            placeholder='First and Last Name'
          />
        </div>

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
        </div>

        <div className={styles.agree}>
          <p>
            By continuing you agree to our{' '}
            <a style={{ color: 'red' }} href='http://localhost:3000/'>
              Privacy Policy
            </a>{' '}
            and
            <a style={{ color: 'red' }} href='http://localhost:3000/'>
              {' '}
              Terms and Conditions
            </a>
            .
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'column' }}>
          <button className={styles.submitButton} type='signup'>
            SIGNUP
          </button>
        </div>
        <h6>
          Already own a SafeStops account?{' '}
          <button
            style={{ backgroundColor: 'transparent', color: 'blue' }}
            onClick={(e) => setModalContent('login')}>
            Login Here!
          </button>
        </h6>
      </form>
    </div>
  );
};

export default RegisterForm;
