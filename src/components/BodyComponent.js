import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import EditProfile from './EditProfile';


function BodyComponent() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />}>
                <Route path='edit-profile' element={<EditProfile />} />
            </Route>
        </Routes>
    )
}

export default BodyComponent;