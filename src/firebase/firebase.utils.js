import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCqJVjxxBNCSaWkQ6UUEorhpNx2tY92lQs",
    authDomain: "crwn-db-eed4b.firebaseapp.com",
    databaseURL: "https://crwn-db-eed4b.firebaseio.com",
    projectId: "crwn-db-eed4b",
    storageBucket: "crwn-db-eed4b.appspot.com",
    messagingSenderId: "193116134925",
    appId: "1:193116134925:web:7d1ad7368b6f9631ddbf44"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShoot = await  userRef.get();
   if (!snapShoot.exists) {
        const { email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                email,
                createdAt,
                ...additionalData
            })
        } catch ( e ) {
            console.log('error creating user', e.message)
        }
   }

   return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, documents) => {

    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    documents.forEach( doc => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, doc);
    });

    return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;