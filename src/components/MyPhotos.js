import React from "react";
import axios from 'axios';
import PhotoCard from "./PhotoCard";

function MyPhotos() {
    const [myPhotos, setMyPhotos] = React.useState(null);

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:3001/user/my-photos', {
            headers: {
                'token': token
            }
        })
            .then(response => response.data)
            .then(data => {
                console.log(data);
                setMyPhotos(data.uploads);
            })
            .catch(err => console.log(err));
    }, [])

    console.log(myPhotos);

    return (
        <div className="myPhotosContainer">
            {myPhotos && myPhotos.map(photo => <PhotoCard key={Math.random()} photo={photo} />)}
        </div>
    )
}

export default MyPhotos;