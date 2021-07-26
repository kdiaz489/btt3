import React, { useState, useEffect, useContext, createContext } from 'react';
import { createUser, createCertificateProfile } from './db';
import { Firebase, auth, firestore } from './firebaseClient';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const handleUser = async (rawUser) => {
    if (rawUser) {
      // take user data and format it
      const user = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken);
      createCertificateProfile(user.uid);
      // set formatted user data to state
      setUser(user);
      cookie.set('auth', true, { expires: 1 });
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signin = (email, password) => {
    // router.push('/dashboard');

    return auth.signInWithEmailAndPassword(email, password).then((response) => {
      setUser(response.user);
      router.push(`trainingrecords/${response.user.uid}`);
      return response.user;
    });
  };

  const signinWithGoogle = () => {
    return auth
      .signInWithPopup(new Firebase.auth.GoogleAuthProvider())
      .then((response) => {
        console.log('Router path');
        console.log(router);

        if (router.asPath === `/trainingrecords/${response.user.uid}`) {
        } else {
          router.push(`/trainingrecords/${response.user.uid}`);
        }

        return handleUser(response.user);
      });
  };

  const signup = (email, password) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        router.push(`trainingrecords/${response.user.uid}`);
        return handleUser(response.user);
      });
  };

  const signout = () => {
    router.push('/');
    return auth.signOut().then(() => {
      setUser(false);
      cookie.remove('auth');
      return false;
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signinWithGoogle,
    signout,
  };
}

const formatUser = async (user) => {
  return {
    uid: user.uid,
    email: user.email,
    token: user.ya,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};
