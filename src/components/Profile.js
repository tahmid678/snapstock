import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Buffer } from 'buffer';
import axios from 'axios';

function Profile() {
    const token = localStorage.getItem('token');
    const [base64Image, setBase64Image] = React.useState(null);
    const { userId, firstName } = jwtDecode(token);

    React.useEffect(() => {
        axios.get(`http://localhost:3001/user/get-profile/${userId}`)
            .then(response => response.data)
            .then(data => {
                const binaryImage = data.profileImage.data.data;
                setBase64Image(Buffer.from(binaryImage, 'binary').toString('base64'));
            })
    }, [userId])
    return (
        <div className='profileContainer'>
            <div className='profileMenu'>
                {base64Image && <div className='profileImage'>
                    <img src={`data:image/jpg;base64,${base64Image}`} alt={firstName} />
                    <i><h3>Hello, {firstName}</h3></i>
                </div>}
                <NavLink to='edit-profile'>Edit Profile</NavLink>
                <NavLink to='upload-photo'>Upload Photo</NavLink>
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