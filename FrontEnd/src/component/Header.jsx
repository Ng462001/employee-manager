import React from 'react'
import '../style/header.css'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
        <>
            <nav className='navbar bg-body-primary col'>
                <div className="container">
                    <NavLink className="navbar-brand navi" to="/">Employee Management System</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Header