import styles from '../styles/LandingPageNav.module.css';
import { useEffect, useState } from 'react';

import Modal from '../components/Modal';
const LandingPageNav = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
  return (
    <>
      <div className={styles['navbar-decoration']}></div>
      <div className={styles.navbar}>
        <div className={styles['navbar-left']}>
          <button className={styles.logo}>B</button>
        </div>
        <div className={styles['navbar-right']}>
          <button>About Us</button>
          <button>Services</button>
          <button>Support</button>
          <button onClick={toggleModal}>Login</button>
          {/* Waiting for Desmond's code */}
          <Modal title='Login' open={open} toggleModal={toggleModal}></Modal>
        </div>
      </div>
    </>
  );
};

export default LandingPageNav;
