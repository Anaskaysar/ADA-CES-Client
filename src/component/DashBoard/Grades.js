import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

export default function Grades() {

    const [user] = useAuthState(auth);
    const [grades, setGrades] = useState([]);
    console.log(user.email);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/grades?email=${user.email}`)
                .then(res => res.json())
                .then(data => setGrades(data))
        }
    }, [user])
    return (
        <div>
            <h1 className='m-2 text-left font-bold font-3xl'>Grade Table Of: Mr. {user.email}</h1>
            <div className="overflow-x-auto m-2">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Children ID</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            grades.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <th>{a.st_id}</th>
                                <td>{a.email}</td>
                                <td>{a.subject}</td>
                                <td>{a.Grade}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
