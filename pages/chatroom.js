import { firebaseClient, auth, firestore } from '../lib/firebaseClient';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState } from 'react';
import styles from '../styles/Chat.module.css';
import { message } from 'statuses';

const Login = () => {
  const loginWithGoogle = () => {
    const provider = new firebaseClient.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={loginWithGoogle}>Login With Google</button>;
};

const Logout = () => {
  return auth.currentUser && <button onClick={auth.signOut()}>Log Out</button>;
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
  const [user] = useAuthState(firebaseClient.auth());
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebaseClient.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue('');
  };

  return (
    <section>
      {user ? (
        <>
          <h1>Chatroom</h1>
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
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
