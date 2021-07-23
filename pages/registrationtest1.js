import Head from 'next/head'
import styles from '../styles/login.module.css'


export default function registrationtest1() {
    return (
        <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script src="https://apis.google.com/js/platform.js" async defer></script>
        </Head>

        <div className={styles.container}>
          
          <h1>Beyond The Talk</h1>
          <div class="g-signin2" data-onsuccess="onSignIn"></div>
        <form action=''>

        <h2>CREATE AN ACCOUNT</h2>

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
        
          
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className={styles.submitButton} type='signup'>
              SIGNUP
            </button>
            

            <div className={styles.agree}>
            <p>
              By continuing you agree to our <a style= {{color: 'red'}} href="http://localhost:3000/">Privacy Policy</a> and 
              <a style= {{color: 'red'}} href="http://localhost:3000/"> Terms and Conditions</a>.
            </p>
            </div>




          </div><h6>Already own a BTT account?  <a style= {{color: 'blue'}}href='index.php'>Login Here!</a></h6>
        </form>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
       </div>
    </div>
    
    )
}