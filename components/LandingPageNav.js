import styles from '../styles/LandingPageNav.module.css';
import { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';
import Modal from '../components/Modal';
const LandingPageNav = () => {
  const auth = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  console.log(auth);
  return (
    <>
      <div className={styles['navbar-decoration']}></div>
      <div className={styles.navbar}>
        <div className={styles['navbar-left']}>
          <button className={styles.logo} onClick={(e) => router.push('/')}>
            SafeStops
          </button>
        </div>
        <div className={styles['navbar-right']}>
          <button>About Us</button>
          <button>Services</button>
          <button>Support</button>

          {!auth.user ? (
            <>
              <button onClick={toggleModal}>Login</button>
              <Modal title='Login' open={open} toggleModal={toggleModal}>
                <LoginForm />
              </Modal>
            </>
          ) : (
            <button
              onClick={(e) => router.push(`trainingrecords/${auth.user.uid}`)}>
              <img src='/assets/user.svg' alt='profileicon' />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default LandingPageNav;
