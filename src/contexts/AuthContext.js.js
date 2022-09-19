import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateEmail,
    updatePassword,
    resetPassword,
    deleteUser
} from 'firebase/auth';
import { database, ref, set } from 'firebase.js';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function writeUserData(user) {
        set(ref(database, 'users/' + user.uid), user);
    }

    async function signup(email, password, name, matricula) {
        const userAuth = await createUserWithEmailAndPassword(auth, email, password);
        var user = {
            uid: userAuth.user.uid,
            name: name,
            matricula: matricula,
            email: userAuth.user.email,
            plants: [
                {
                    id: 1,
                    name: 'Colégio Alceu',
                    description: ''
                }
            ]
        };
        writeUserData(user);
        return userAuth;
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function editEmail(email) {
        return updateEmail(currentUser, email);
    }

    function editPassword(password) {
        return updatePassword(currentUser, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        editEmail,
        editPassword
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
