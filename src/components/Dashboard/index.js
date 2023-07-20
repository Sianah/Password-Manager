// /components/Dashboard/index.js
import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../../services/firebase';

const Dashboard = () => {
    const [passwords, setPasswords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const user = auth.currentUser;
            if (user) {
                const q = query(collection(db, "passwords"), where("userId", "==", user.uid));
                const querySnapshot = await getDocs(q);
                setPasswords(querySnapshot.docs.map(doc => doc.data()));
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Your Passwords</h1>
            <ul>
                {passwords.map(password => (
                    <li key={password.id}>
                        {password.website}: {password.username}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
