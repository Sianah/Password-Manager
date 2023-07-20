// /components/PasswordEntry/index.js
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../../services/firebase';

const PasswordEntry = () => {
    const [website, setWebsite] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleAddPassword = async () => {
        const user = auth.currentUser;
        if (user) {
            try {
                await addDoc(collection(db, "passwords"), {
                    userId: user.uid,
                    website,
                    username,
                    password  // Reminder: Store encrypted!
                });
            } catch (error) {
                console.error("Error adding password:", error);
            }
        }
    };

    return (
        <div>
            <input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Website" />
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleAddPassword}>Add Password</button>
        </div>
    );
}

export default PasswordEntry;
