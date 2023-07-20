// /components/Login/index.js
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../services/firebase';

const Login = () => {
    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Error during sign in:", error);
        }
    };

    return (
        <div>
            <button onClick={handleLogin}>Sign in with Google</button>
        </div>
    );
}

export default Login;
