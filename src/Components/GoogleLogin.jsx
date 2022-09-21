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
        <div
            style={{
                marginRight: "50px",
                display: "flex",
                alignItems: "baseline",
            }}
        >
            <h2 style={{ fontSize: "20px", marginRight: "10px" }}>
                {name == null ? "" : `Welcome ${name}`}
            </h2>
            {name == null ? (
                <button style={buttonStyle} onClick={login}>
                    Login With Google
                </button>
            ) : (
                <button style={buttonStyle} onClick={logout}>
                    Logout
                </button>
            )}
        </div>
    );
}

const buttonStyle = {
    background: "none",
    border: "2px solid #222",
    borderRadius: "6px",
    height: "1.5rem",
    fontSize: "1rem",
};
