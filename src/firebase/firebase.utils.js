import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBmOliz9Fu_xv7VIiRpAWEajcOXl6RZqrs',
  authDomain: 'pgsite-baa97.firebaseapp.com',
  databaseURL: 'https://pgsite-baa97.firebaseio.com',
  projectId: 'pgsite-baa97',
  storageBucket: '',
  messagingSenderId: '344951913056',
  appId: '1:344951913056:web:401d6e99fb041d6f',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
