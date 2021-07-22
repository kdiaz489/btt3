import { firebaseClient, auth, firestore } from '../firebaseClient';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState } from 'react';

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
  const { text, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div>
      <img src='' alt='' />
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
          <form onSubmit={sendMessage}>
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              type='text'
              name=''
              id=''
            />
            <button>Send</button>
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
