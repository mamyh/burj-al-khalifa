import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import initializingApp from "../firebase/firebase.init";

initializingApp();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const auth = getAuth();

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider).then(result => setUser(result.user)).catch(error => setError(error.message));
    }

    const signInWithGithub = () => {
        const gitProvider = new GithubAuthProvider();
        signInWithPopup(auth, gitProvider).then(result => setUser(result.user)).catch(error => setError(error.message))
    }

    const logout = () => {
        signout(auth).then(() => setUser({})).catch(error => setError(error.message))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //if user is logged in 
                setUser(user);
            } else {
                //if user is logged out 
                setUser({});
            }
        })
    }, []);

    return {
        user,
        error,
        signInWithGithub,
        signInWithGoogle,
        logout
    }
}

export default useFirebase;