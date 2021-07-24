import { Firebase } from './firebaseClient';
const firestore = Firebase.firestore();

export const createUser = (uid, data) => {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
};

export const createSite = (data) => {
  const site = firestore.collection('sites').doc();
  site.set(data);
  return site;
};

export const createFeedback = (data) => {
  return firestore.collection('feedback').add(data);
};

export const deleteFeedback = (id) => {
  return firestore.collection('feedback').doc(id).delete();
};
