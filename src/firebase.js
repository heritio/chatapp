import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
import { getAuth,  GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBi4PRIGue8lBNxdvL4ppJT1AdVMoI9je0",
    authDomain: "snapchat-clone-58211.firebaseapp.com",
    projectId: "snapchat-clone-58211",
    storageBucket: "snapchat-clone-58211.appspot.com",
    messagingSenderId: "141951096305",
    appId: "1:141951096305:web:0b8b1a23e3ce62e5d12050"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const storage = getStorage();
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider};