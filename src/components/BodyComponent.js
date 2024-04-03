import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import EditProfile from './EditProfile';
import UploadPhoto from './UploadPhoto';
import MyPhotos from './MyPhotos';
import Home from './Home';
import PhotoDetailsComponent from './PhotoDetailsComponent';
import LikedPhotos from './LikedPhotos';


function BodyComponent() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/photo-details' element={<PhotoDetailsComponent />} />
            <Route path='/profile' element={<Profile />}>
                <Route path='edit-profile' element={<EditProfile />} />
                <Route path='upload-photo' element={<UploadPhoto />} />
                <Route path='my-photos' element={<MyPhotos />} />
                <Route path='liked-photos' element={<LikedPhotos />} />
            </Route>
        </Routes>
    )
}

export default BodyComponent;