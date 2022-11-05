import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function UserRow({ user }) {

    const { email, role } = user;
    const [success, setSucess] = useState(false);
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/`, {
            method: 'PUT',
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    setSucess(true);
                    toast.success(`Successfully made an admin`);
                }
            })
    }

    return (
        <tr>
            <td></td>
            <td>{email}</td>
            <td>{role}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    )
}
