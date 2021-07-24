import styles from '../styles/NavBar.module.css';
import SideNav from '../components/SideNav';
import { useState } from 'react';
const Navbar = () => {
  const [open, setOpen] = useState('0%');
  const toggleOpen = () => {
    setOpen((prev) => {
      if (prev === '0%') {
        return '25%';
      }
      return '0%';
    });
  };
  return (
    <>
      <SideNav open={open} toggleOpen={toggleOpen} />
      <div className={styles['navbar-decoration']}></div>
      <div className={styles.navbar}>
        <div>
          <img className={styles.backarrow} src='/assets/arrow-left.svg'></img>
        </div>
        <div>
          <h1 className={styles.title2}>Beyond The Talk</h1>
        </div>
        <div>
          <button className={styles.menubutton} onClick={toggleOpen}>
            <img className={styles.menuicon} src='/assets/menu.svg' />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
