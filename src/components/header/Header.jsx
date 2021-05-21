import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
        <div className="header">
            <Link to="/">
                <h1>HRnet</h1>
            </Link>
            <nav>
                <Link to="/employee-list">View Current Employees</Link>
            </nav>
        </div>
        </>
    )
}

export default Header