import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <div className='heading'>
            <h2>SnapStock</h2>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/photos'>Photos</NavLink>
                </li>
                <li>
                    <NavLink to='/profile'>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header;