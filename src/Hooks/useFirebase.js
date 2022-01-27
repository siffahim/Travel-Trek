import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import initializationAuthentication from '../Pages/Login/Firebase/firebase.init';
initializationAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    //user register
    const register = (name, email, password, location, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const newUser = { email, displayName: name };
                setUser(newUser)

                //updateprofile
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        setError('')
                    })
                    .catch(err => {
                        setError(err.message)
                    })


                //redirect path
                const uri = location?.state?.from || '/';
                navigate(uri)
            })
            .catch(err => setError(err.message))
            .finally(() => {
                setIsLoading(false)
            })
    }

    //user login
    const login = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('')

                //redirect path
                const uri = location?.state?.from || '/';
                navigate(uri)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }
    //googleLogin
    const googleLogin = (location, navigate) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                setError('');

                //redirect path
                const uri = location?.state?.from || '/';
                navigate(uri)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    //log out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                swal(
                    "Opps!",
                    "Successfully Logout!",
                    "warning"
                );
                setError({})
            })
    }

    //user Track
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return unsubscribe;
    }, [])

    return {
        user,
        error,
        login,
        logOut,
        isLoading,
        register,
        googleLogin
    }
}

export default useFirebase;