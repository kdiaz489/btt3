import Head from 'next/head'
import styles from '../styles/register.module.css'
import { Firebase, auth, firestore } from '../lib/firebaseClient';

export default function register() {
 
    return (

        <div className={styles.container}>
          <h1>Beyond The Talk</h1>

        <form action=''>

        <h2 font='graduate' >CREATE AN ACCOUNT</h2>

        <div className={styles.fastLoginButton }>
            <button style={{backgroundColor: 'transparent',  border: 'none'}}>
            <img src='/assets/google.svg' alt="Sign up with Google" />
            </button>
            <button style={{backgroundColor: 'transparent' , border: 'none'}}>
            <img src='/assets/facebook.svg' alt="Sign in with facebook" />
            </button>
      </div>
        
        <div className={styles.formGroup}>
            <input 
              className={styles.input}
              type='First and Last Name'
              name='First and Last Name'
              id='First and Last Name'
              placeholder= "First and Last Name"
            />
          </div>

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
           <p><input
              type='checkbox'
              name='stayloggedin'
              id='stayloggedin'
              />Stay Logged in</p>
          </div>

          <div className={styles.agree}>
            <p>
              By continuing you agree to our <a style= {{color: 'red'}} href="http://localhost:3000/">Privacy Policy</a> and 
              <a style= {{color: 'red'}} href="http://localhost:3000/"> Terms and Conditions</a>.
            </p>
            </div>

      
          <div style={{ display: 'flex', justifyContent: 'column' }}>
            <button className={styles.submitButton} type='signup'>
              SIGNUP
            </button>

          </div><h6>Already own a SafeStops account?  <a style= {{color: 'blue'}}href='index.php'>Login Here!</a></h6>
        </form>
        
       </div>   
    )
}