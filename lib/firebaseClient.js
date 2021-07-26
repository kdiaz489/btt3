import Firebase from ‘firebase/app’;
import ‘firebase/auth’;
import ‘firebase/firestore’;

const CLIENT_CONFIG = {
  apiKey: 'AIzaSyB5V5hNQ0bq2qxox7dgATnLwDg5Wn-Z-V4',
  authDomain: 'beyond-the-talk.firebaseapp.com',
  projectId: 'beyond-the-talk',
  storageBucket: 'beyond-the-talk.appspot.com',
  messagingSenderId: '787374018749',
  appId: '1:787374018749:web:446332cf7c71d01b7e67d4',
  measurementId: 'G-CYXH3TS5L1',
};

if (!Firebase.apps.length) {
  Firebase.initializeApp(CLIENT_CONFIG);
}

const auth = Firebase.auth();
const firestore = Firebase.firestore();
export { Firebase, auth, firestore };
