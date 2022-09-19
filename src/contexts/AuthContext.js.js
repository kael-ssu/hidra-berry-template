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
import { database, ref, set, get, remove, child } from 'firebase.js';
import { Token, SuapClient } from 'client';
import { CLIENT_ID, REDIRECT_URI, SUAP_URL, SCOPE } from 'settings.sample';
require('js.cookie');

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [userFirebase, setUserFirebase] = useState();
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
        var suap = new SuapClient(SUAP_URL, CLIENT_ID, REDIRECT_URI, SCOPE);
        suap.init();
        if (suap.isAuthenticated()) {
            suap.logout();
        }
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

    function deleteAccount(user) {
        remove(child(ref(database), 'users/' + user.uid));
        return deleteUser(user);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            if (user != null) {
                get(child(ref(database), 'users/' + user.uid)).then((snapshot) => {
                    setUserFirebase(snapshot.val());
                });
            }

            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        userFirebase,
        signup,
        login,
        logout,
        resetPassword,
        editEmail,
        editPassword,
        deleteAccount
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
