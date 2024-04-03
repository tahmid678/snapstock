import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
    const token = localStorage.getItem('token');
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
                {token === null ?
                    null :
                    <li>
                        <NavLink to='/profile'>Profile</NavLink>
                    </li>
                }
                {token === null ?
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                    :
                    null
                }
            </ul>
        </div>
    )
}

export default Header;