import styles from '../styles/login.module.css';

const logintest1 = () => {
  return (

    <div className={styles.container}>
      
      <h1>Beyond The Talk</h1>
      <h1>Login</h1>

     
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
      
      
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className={styles.submitButton} type='submit'>
          LOGIN
        </button>
        
      </div>

      <div className={styles.createAccount}>
      <a href="http://localhost:3000/registrationtest1"> Create an Account</a>
      </div>
    </form>
   </div>


 )
}
export default logintest1;
