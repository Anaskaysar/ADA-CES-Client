import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

export default function DashHome() {

    const [user] = useAuthState(auth);
    const [users, setUsers] = useState([]);
    console.log(user.email);
    useEffect(() => {
        if (user) {
            fetch('http://localhost:5000/users', {
                method: 'GET',
            })
                .then(res => res.json())
                .then(data => setUsers(data))
        }
    }, [user])



    return (
        <div>
            <h1 className='text-2xl font-bold text-Black-500 text-left m-2'>Dashboard Home</h1>
            <h1 className='text-2xl font-bold text-Black-500 text-left m-2'>User Details </h1>
            <h1 className='text-2xl font-bold text-Black-500 text-left m-2'>Email : {user.email}</h1>
        </div>
    )
}
