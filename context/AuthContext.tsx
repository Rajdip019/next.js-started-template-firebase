//Inside the AuthContext file.

import FirebaseAuth, { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/clientApp";
import React from "react";

export interface IAuthContext {
    currentUser: FirebaseAuth.User | null,
    login: () => any,
    logout: () => any,
}

const defaultValues = {
    currentUser: null,
    login: () => { },
    signup: () => { },
    logout: () => { },
}

const AuthContext = React.createContext<IAuthContext>(defaultValues)

export function useAuth() {
    return React.useContext(AuthContext)
}

export function AuthProvider({ children }: any) {
    const [currentUser, setCurrentUser] = React.useState<FirebaseAuth.User | null>(null)
    const [loading, setLoading] = React.useState<boolean>(true)

    console.log("undo currentUser", currentUser)


    // Inside AuthProvider
    const provider = new GoogleAuthProvider();

    const login = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log({ credential, token, user });
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log({ errorCode, errorMessage, email, credential });
            });
    };

    const logout = () => {
        auth.signOut();
        console.log("logout");
    };

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, []);

    const value = {
        currentUser,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {
                loading ? <p>Loading...</p> :
                    // <FCMProvider>
                    children
                // </FCMProvider>
            }
        </AuthContext.Provider>
    )

}


