import React from 'react';
import { Routes, Route } from 'react-router';
import Login from './Login';

function BodyComponent() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default BodyComponent;