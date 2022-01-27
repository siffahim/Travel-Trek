import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import initializationAuthentication from '../Pages/Login/Firebase/firebase.init';
initializationAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();

    //user register
    const registerUser = (name, email, password, location, navigate) => {
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

                //send data database
                saveToDb(name, email)

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
    const loginUser = (email, password, location, navigate) => {
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

    //save to Db
    const saveToDb = (name, email) => {
        const user = {
            name,
            email
        }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
    }

    //collect admin role
    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])

    return {
        user,
        error,
        loginUser,
        admin,
        logOut,
        isLoading,
        registerUser,
        googleLogin
    }
}

export default useFirebase;