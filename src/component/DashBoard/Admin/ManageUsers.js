import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import UserRow from './UserRow';


const ManageUsers = () => {

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
            <h2 className="text-2xl text-left font-bold m-2">All Users: {users.length}</h2>
            <div class="overflow-x-auto m-2">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>All Users</th>
                            <th>Role</th>
                            <th>Give Role</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}>
                            </UserRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;