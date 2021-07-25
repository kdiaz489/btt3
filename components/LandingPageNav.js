import styles from '../styles/LandingPageNav.module.css';
const LandingPageNav = () => {
  return (
    <>
      <div className={styles['navbar-decoration']}></div>
      <div className={styles.navbar}>
        <div className={styles['navbar-left']}>
          <h1 className={styles.logo}>B</h1>
        </div>
        <div className={styles['navbar-right']}>
          <button>Home</button>
          <button>About Us</button>
          <button>Services</button>
          <button>Support</button>
          <button>Login</button>
        </div>
      </div>
    </>
  );
};

export default LandingPageNav;
