import { Firebase } from './firebaseClient';
const firestore = Firebase.firestore();

export const createUser = (uid, data) => {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
};
export const createCertificateProfile = (uid) => {
  let docRef = firestore.collection('profiles').doc(`${uid}-profile`);
  docRef.get().then((doc) => {
    if (doc.exists) {
      return;
    } else {
      return docRef.set({ uid, certification: false }, { merge: true });
    }
  });
};
