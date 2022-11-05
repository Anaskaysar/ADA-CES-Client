import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className="drawer drawer-mobile bg-red-50">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                <h1 className='text-2xl font-bold text-Black-500'>Welcome To Your DashBoard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-lime-50 text-base-content bg-">
                    <li><Link to='/dashboard'>DashHome</Link></li>
                    <li><Link to='/dashboard/manageusers'>Manage User</Link></li>
                    <li><Link to="/dashboard/grades">Grades Table</Link></li>
                    <li><Link to="/dashboard/charts">Charts</Link></li>
                </ul>
            </div>
        </div>
    )
}
