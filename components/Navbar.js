import styles from '../styles/NavBar.module.css';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <img className={styles.backarrow} src='/assets/arrow-left.svg'></img>
      </div>
      <div>
        <h1 className={styles.title2}>Beyond The Talk</h1>
      </div>
      <div>
        <a href=''>
          <img className={styles.menuicon} src='/assets/menu.svg' />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
