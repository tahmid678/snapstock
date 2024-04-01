import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Profile() {
    return (
        <div className='profileContainer'>
            <div className='profileMenu'>
                <NavLink to='edit-profile'>Edit Profile</NavLink>
                <NavLink to='my-photos'>My Photos</NavLink>
                <NavLink to='liked-photos'>Liked Photos</NavLink>
                <NavLink to='logout'>Log Out</NavLink>
            </div>
            <div className='profileContent'>
                <Outlet />
            </div>
        </div>
    )
}

export default Profile;