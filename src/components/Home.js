import React from 'react';
import axios from 'axios';
import PhotoDetailsCard from './PhotoDetailsCard';

function Home() {
    const [photos, setPhotos] = React.useState(null);
    const [likeToggle, setLikeToggle] = React.useState(false);
    const [token, setToken] = React.useState(null);

    React.useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [])

    React.useEffect(() => {
        axios.get('http://localhost:3001/photo/get-all-photos')
            .then(response => response.data)
            .then(data => setPhotos(data))
            .catch(err => console.log(err));
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

    return (
        <div className='homeContainer'>
            {photos && photos.map(photo => <PhotoDetailsCard key={Math.random()} photo={photo} likeOrUnlikePhoto={likeOrUnlikePhoto} />)}
        </div>
    )
}

export default Home;