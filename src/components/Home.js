import React from 'react';
import axios from 'axios';
import PhotoDetailsCard from './PhotoDetailsCard';
import CardAsGuestUser from './CardAsGuestUser';
import AuthenticationContext from '../utils/AuthenticationContext';

function Home() {
    const [photos, setPhotos] = React.useState(null);
    const [likeToggle, setLikeToggle] = React.useState(false);
    const [userLikes, setUserLikes] = React.useState(null);
    const [userId, setUserId] = React.useState(null);
    // const [token, setToken] = React.useState(null);

    const { token, setToken } = React.useContext(AuthenticationContext);
    console.log(token);

    React.useEffect(() => {
        axios.get('http://localhost:3001/photo/get-all-photos')
            .then(response => response.data)
            .then(data => setPhotos(data))
            .catch(err => console.log(err));

        axios.get('http://localhost:3001/user/get-user', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
            .then(response => response.data)
            .then(data => setUserLikes(data.likes))
            .catch(err => console.log(err))
        setToken(localStorage.getItem('token'))
    }, []);

    React.useEffect(() => {
        axios.get('http://localhost:3001/photo/get-all-photos')
            .then(response => response.data)
            .then(data => setPhotos(data))
            .catch(err => console.log(err));

        axios.get('http://localhost:3001/user/get-user', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
            .then(response => response.data)
            .then(data => setUserLikes(data.likes))
            .catch(err => console.log(err))
    }, [likeToggle, token])

    const likeOrUnlikePhoto = (mode, photoId) => {
        if (mode === 'like') {
            axios.put(`http://localhost:3001/photo/like-photo/${photoId}`, {}, {
                headers: {
                    "token": localStorage.getItem('token')
                }
            })
                .then(data => {
                    setLikeToggle(prevState => !prevState);
                }).catch(err => console.log(err));
        } else {
            axios.put(`http://localhost:3001/photo/unlike-photo/${photoId}`, {}, {
                headers: {
                    'token': localStorage.getItem('token')
                }
            })
                .then(data => {
                    setLikeToggle(prevState => !prevState);
                })
                .catch(err => console.log(err));
        }
    }

    let allPhotos = null;
    if (photos && userLikes && token) {
        allPhotos = photos.map(photo => <PhotoDetailsCard key={Math.random()} photo={photo} likeOrUnlikePhoto={likeOrUnlikePhoto} likes={userLikes} />)
    } else if (photos) {
        allPhotos = photos.map(photo => <CardAsGuestUser key={Math.random()} photo={photo} />)
    }

    return (
        <div className='homeContainer'>
            {/* {photos && photos.map(photo => token !== null ? <PhotoDetailsCard key={Math.random()} photo={photo} likeOrUnlikePhoto={likeOrUnlikePhoto} token={token} /> : <CardAsGuestUser key={Math.random()} photo={photo} />)} */}
            {allPhotos}
        </div>
    )
}

export default Home;