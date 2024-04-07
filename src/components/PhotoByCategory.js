import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import AuthenticationContext from '../utils/AuthenticationContext';
import PhotoDetailsCard from './PhotoDetailsCard';
import CardAsGuestUser from './CardAsGuestUser';

function PhotoByCategory() {
    const [photos, setPhotos] = React.useState(null);
    const [userLikes, setUserLikes] = React.useState(null);
    const [likeToggle, setLikeToggle] = React.useState(false);
    const [categoryToggle, setCategoryToggle] = React.useState(null);

    const { token } = React.useContext(AuthenticationContext);
    console.log(token);
    const { state } = useLocation();
    const { category } = state;
    console.log(category);



    React.useEffect(() => {
        axios.get(`http://localhost:3001/photo/get-photos-by-category/${category}`)
            .then(response => response.data)
            .then(data => {
                console.log(data);
                setPhotos(data);
            })
            .catch(err => console.log(err));

        if (token) {
            axios.get('http://localhost:3001/user/get-user', {
                headers: {
                    'token': token
                }
            })
                .then(response => response.data)
                .then(data => {
                    console.log(data);
                    setUserLikes(data.likes);
                })
                .catch(err => console.log(err));
        }
    }, []);

    React.useEffect(() => {
        axios.get(`http://localhost:3001/photo/get-photos-by-category/${category}`)
            .then(response => response.data)
            .then(data => {
                console.log(data);
                setPhotos(data);
            })
            .catch(err => console.log(err));

        if (token) {
            axios.get(`http://localhost:3001/user/get-user`, {
                headers: {
                    'token': token
                }
            })
                .then(response => response.data)
                .then(data => {
                    setUserLikes(data.likes);
                    console.log(data);
                })
                .catch(err => console.log(err));
        }
    }, [likeToggle, token, category])

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
        <div className='photoByCategoryContainer'>
            {allPhotos}
        </div>
    )
}

export default PhotoByCategory;