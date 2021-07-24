import styles from '../styles/Sidenav.module.css';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';

const SideNav = ({ open, toggleOpen }) => {
  const fbAuth = useAuth();
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.sidenav} style={{ width: open }}>
      <button>About</button>
      <button>Services</button>
      <button>Clients</button>
      <button>Contact</button>
      <button onClick={(e) => router.push('/profilesettings')}>
        Profile Settings
      </button>
      <button onClick={(e) => fbAuth.signout()}>Log Out</button>
    </div>
  );
};

export default SideNav;
