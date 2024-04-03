import React from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';

function LikedPhotos() {
    const [likedPhotos, setLikedPhotos] = React.useState(null);
    const token = localStorage.getItem('token');

    React.useEffect(() => {
        axios.get(`http://localhost:3001/user/get-liked-photos`, {
            headers: {
                'token': token
            }
        })
            .then(response => response.data)
            .then(data => setLikedPhotos(data.likes))
            .catch(err => console.log(err));
    }, [])

    console.log(likedPhotos);

    return (
        <div className='likedPhotos'>
            {likedPhotos && likedPhotos.map(photo => <PhotoCard key={Math.random()} photo={photo} />)}
        </div>
    )
}

export default LikedPhotos;