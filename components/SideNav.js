import styles from '../styles/Sidenav.module.css';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';

const SideNav = ({ open, toggleOpen }) => {
  const fbAuth = useAuth();
  const router = useRouter();

  console.log(fbAuth);
  const hashCode = function(s){
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  }
 
  return (
    fbAuth &&
  (<div className={styles.sidenav} style={{ width: open }}>
      <button>About</button>
      <button>Services</button>
      <button>Clients</button>
      <button>Contact</button>
      <button onClick={(e) => router.push(`/trainingrecords/`)}>Training Records</button>
      <button onClick={(e) => router.push('/chatroom')}>Chat</button>
      <button onClick={(e) => router.push('/profilesettings')}>
        Profile Settings
      </button>
      <button onClick={(e) => fbAuth.signout()}>Log Out</button>
    </div>)
  );
};

export default SideNav;
