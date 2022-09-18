import React, { useState } from "react";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithRedirect,
    getRedirectResult,
    signInWithPopup,
    signOut,
} from "firebase/auth";

export default function GoogleLogin() {
    const [name, setName] = useState(null);

    const login = () => {
        const provider = new GoogleAuthProvider();
        // const auth = getAuth();
        // signInWithRedirect(auth, provider);

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log("hello");
                setName(user.displayName);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    const auth = getAuth();
    getRedirectResult(auth)
        .then((result) => {
            const user = result.user;
            console.log("hello");
            setName(user.displayName);
        })
        .catch((error) => {
            console.log("error: ", error);
        });

    const logout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setName(null);
                console.log("Sign-out successful.");
            })
            .catch((error) => {
                // An error happened.
            });
    };

    return (
        <div>
            <h2>{name == null ? "" : `Welcome ${name}`}</h2>
            <button onClick={login}>Login With Google</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
