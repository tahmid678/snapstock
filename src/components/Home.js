import React from 'react';
import axios from 'axios';
import PhotoDetailsCard from './PhotoDetailsCard';

function Home() {
    const [photos, setPhotos] = React.useState(null);

    React.useEffect(() => {
        axios.get('http://localhost:3001/photo/get-all-photos')
            .then(response => response.data)
            .then(data => setPhotos(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className='homeContainer'>
            {photos && photos.map(photo => <PhotoDetailsCard key={Math.random()} photo={photo} />)}
        </div>
    )
}

export default Home;