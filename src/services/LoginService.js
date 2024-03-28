import { signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence, signOut } from "firebase/auth";
import { auth } from '../utils/firebaseUtils';

export default class LoginService {

    static signInWithEmailAndPassword = async (email, password, callback) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            callback({
                success: true,
                user: user
            });
        })
        .catch((error) => {
            const errorMessage = error.message;
            callback({
                success: false,
                errorMessage: errorMessage
            });
        });
    }

    // static signInWithEmailAndPassword = async (email, password, callback) => {
    //     setPersistence(auth, browserSessionPersistence)
    //     .then(() => {
    //         signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             callback({
    //                 success: true,
    //                 user: user
    //             });
    //         })
    //         .catch((error) => {
    //             const errorMessage = error.message;
    //             callback({
    //                 success: false,
    //                 errorMessage: errorMessage
    //             });
    //         });
    //     })
    //     .catch((error) => {
    //         const errorMessage = error.message;
    //         callback({
    //             success: false,
    //             errorMessage: errorMessage
    //         });
    //     });
    // }

    static onAuthStateChanged = async (callback) => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            callback({
                success: true,
                user: user
            });
            // ...
        } else {
            callback({
                success: false,
                user: null
            });
            // User is signed out
        }
        });
    }

    static logout = async () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    static isLoggedIn = () => {
        return auth.currentUser;
    }
}


