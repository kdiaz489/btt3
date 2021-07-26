import styles from '../styles/Sidenav.module.css';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SideNav = ({ open, toggleOpen, children }) => {
  const fbAuth = useAuth();
  const router = useRouter();

  // Condition Render Sidebar
  return (
    <div className={styles.sidenav} style={{ width: open }}>
      <p className={styles.navlogo}>SafeStops</p>
      <button
        onClick={(e) => router.push(`/trainingrecords/${fbAuth.user.uid}`)}>
        Training Records
      </button>
      <button onClick={(e) => router.push('/chatroom')}>Chat</button>
      <button onClick={(e) => router.push('/profilesettings')}>Settings</button>
      <button
        onClick={(e) => {
          router.push('/');
          return fbAuth.signout();
        }}>
        Log Out
      </button>
    </div>
  );
};

export default SideNav;
