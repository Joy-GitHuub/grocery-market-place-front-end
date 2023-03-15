import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendEmailVerification, sendPasswordResetEmail, getIdToken, } from "firebase/auth";
import React from 'react';
import initializeAuthentication from './../Pages/Authentication/Firebase/firebase.inti';
import { toast } from 'react-toastify';
import useUserPost from './Fetch_Hooks/useUserPost';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = React.useState({});
    const [authError, setAuthError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);

    const { createUser } = useUserPost();


    const auth = getAuth();

    const handleCreateUser = async (registerInfo, location, navigate) => {
        setIsLoading(true);
        const { name, email, password } = registerInfo;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name, role: 'buyer' };
                setUser(newUser);
                createUser(registerInfo);
                updateUserProfile(name);
                verifyUserEmail();
                const destination = location.state?.from || "/";
                navigate(destination);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
                setUser({});
            }).finally(() => setIsLoading(false))
    };


    const handleLoginUser = async (loginInfo, location, navigate) => {
        setIsLoading(true);
        const { email, password } = loginInfo;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                // setUser(userCredential.user);
                const destination = location.state?.from || "/";
                navigate(destination);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
                setUser({});
            }).finally(() => setIsLoading(false))
    };


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                sessionStorage.removeItem('ID_TOKEN');
            })
            .catch((error) => {
            })
            .finally(() => {
                setIsLoading(false);
            });
    };


    // Update User Profile
    const updateUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
        }).catch((error) => {
        });
    };


    // Verify Email Address
    const verifyUserEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
            });
    }

    const handleResetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                toast.success('Password Change Email Send Success..', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    };


    React.useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then((idToken) => {
                        sessionStorage.setItem('ID_TOKEN', idToken)
                    })
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, [auth]);




    return {
        user, authError, isLoading, handleCreateUser, handleLoginUser, logOut, handleResetPassword,
    }
};

export default useFirebase;