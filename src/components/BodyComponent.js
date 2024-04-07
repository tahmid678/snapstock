import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Profile from './Profile';
import EditProfile from './EditProfile';
import UploadPhoto from './UploadPhoto';
import MyPhotos from './MyPhotos';
import Home from './Home';
import PhotoDetailsComponent from './PhotoDetailsComponent';
import LikedPhotos from './LikedPhotos';
import SearchComponent from './SearchComponent';
import UserDetails from './UserDetails';
import PhotoByCategory from './PhotoByCategory';
import AuthenticationContext from '../utils/AuthenticationContext';


function BodyComponent() {
    const { token } = React.useContext(AuthenticationContext);
    const navigate = useNavigate();


    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/photo-details' element={<PhotoDetailsComponent />} />
            <Route path='/search-result' element={<SearchComponent />} />
            <Route path='/product-by-category' element={<PhotoByCategory />} />
            <Route path='/profile' element={<Profile />}>
                <Route index element={<UserDetails />} />
                <Route path='edit-profile' element={<EditProfile />} />
                <Route path='upload-photo' element={<UploadPhoto />} />
                <Route path='my-photos' element={<MyPhotos />} />
                <Route path='liked-photos' element={<LikedPhotos />} />
            </Route>
        </Routes>
    )
}

export default BodyComponent;