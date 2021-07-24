import { Firebase, auth, firestore } from '../lib/firebaseClient';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useRef, useState } from 'react';
import styles from '../styles/Chat.module.css';
import { message } from 'statuses';
import { useAuth } from '../lib/auth';
import NavBar from '../components/Navbar';
const Login = () => {
  const fbAuth = useAuth();
  const loginWithGoogle = () => {
    const provider = new Firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <button onClick={(e) => fbAuth.signinWithGoogle()}>
      Login With Google
    </button>
  );
};

const Logout = () => {
  return (
    auth.currentUser && <button onClick={(e) => auth.signOut()}>Log Out</button>
  );
};

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`${styles.message} ${styles[messageClass]} `}>
      <img
        className={styles.imgChat}
        src={
          photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'
        }
      />
      <p>{text}</p>
    </div>
  );
};

const chatroom = () => {
  const dummy = useRef();
  const [user] = useAuthState(Firebase.auth());
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });
  console.log(messages);
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue('');
    // dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section>
      {user ? (
        <>
          <NavBar />
          {/* <Logout /> */}
          {/* Main Container */}
          <div
            style={{
              display: 'grid',
              height: '90vh',
              gridTemplateColumns: '20% 80%',
            }}>
            <div
              style={{
                width: '100%',
                backgroundColor: '#0b2d43',
              }}></div>
            <div
              style={{
                width: '100%',
                display: 'grid',

                gridTemplateRows: '800px 100px',
              }}>
              <div style={{ overflowY: 'scroll' }}>
                {messages &&
                  messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg} />
                  ))}
                {/* <span ref={dummy}></span> */}
              </div>
              <div>
                <form className={styles.msgForm} onSubmit={sendMessage}>
                  <input
                    value={formValue}
                    className={styles.formInput}
                    onChange={(e) => setFormValue(e.target.value)}
                    type='text'
                    name=''
                    id=''
                  />
                  <button className={styles.sendMsgButton}>Send</button>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </section>
  );
};

export default chatroom;
