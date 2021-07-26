import { Firebase, auth, firestore } from '../lib/firebaseClient';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Chat.module.css';
import { message } from 'statuses';
import { useAuth } from '../lib/auth';
import NavBar from '../components/Navbar';
import Head from 'next/head';

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
  const profilesRef = firestore.collection('profiles');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });
  console.log(user);
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

  // When user enters chatroom/ after creation/login, it will check and create a certification profile
  const updateUserProfile = async () => {
    try {
      const response = await profilesRef.doc(`${user.uid}-profile`).get();
      if (!response.exists) {
        await profilesRef.doc(`${user.uid}-profile`).set({
          uid: user.uid,
          certification: false,
        });
      } else {
        console.log('updated already');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!user) return;
    updateUserProfile();
  }, [user]);

  return (
    <section>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!document.cookie.includes('auth')) {
                window.location.href = "/"
              }
            `,
          }}
        />
      </Head>
      <>
        <NavBar />
        {/* Secondary Chat NavBar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            borderTop: '1px #0b2d43 solid',
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '5px 20px',
            }}>
            <img width='40px' src='/assets/home.svg' alt='homeicon' />
            <span>Home</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '5px 20px',
              backgroundColor: '#f14827',
            }}>
            <img
              width='40px'
              src='/assets/message-square.svg'
              alt='messagesquareicon'
            />
            <span>Chat</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '5px 20px',
            }}>
            <img width='40px' src='/assets/users.svg' alt='contactsicon' />
            <span>Contacts</span>
          </div>
        </div>
        {/* Main Container */}
        <div
          style={{
            display: 'grid',
            height: '90vh',
            gridTemplateColumns: '30% 70%',
          }}>
          {/* Left Chat Nav */}
          <div
            style={{
              width: '100%',
              backgroundColor: '#0b2d43',
            }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                backgroundColor: '#394e5b',
                borderRadius: '15px',
                marginTop: '20px',
                height: '3.5rem',
              }}>
              <p
                style={{
                  fontFamily: 'Graduate',
                  color: 'white',
                  fontSize: '20px',
                }}>
                S
              </p>
              <p
                style={{
                  fontFamily: 'Roboto Slab',
                  color: 'white',
                  textAlign: 'center',
                }}>
                SafeStops
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',

                marginTop: '20px',
                height: '3.5rem',
              }}>
              <img src='/assets/certificateicon.svg' alt='' />
              <p
                style={{
                  fontFamily: 'Roboto Slab',
                  color: 'white',
                  textAlign: 'center',
                }}>
                {user ? user.displayName : 'Zane'}
              </p>
            </div>
          </div>
          {/* Right Side of Chat */}
          <div
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateRows: '60px 800px 100px',
            }}>
            {/* Right Side of Chat - NavBar */}
            <div
              style={{
                backgroundColor: '#f0ebeb',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <img
                style={{ padding: '10px' }}
                src='/assets/paperclip.svg'
                alt='paperclipicon'
              />
              <img
                style={{ padding: '10px' }}
                src='/assets/mic.svg'
                alt='micicon'
              />
              <img
                style={{ padding: '10px' }}
                src='/assets/phone.svg'
                alt='phoneicon'
              />
              <img
                style={{ padding: '10px' }}
                src='/assets/video.svg'
                alt='videoicon'
              />
            </div>
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
    </section>
  );
};

export default chatroom;
