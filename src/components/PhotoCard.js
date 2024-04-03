import React from 'react';
import { Buffer } from 'buffer';

function PhotoCard({ photo }) {
    console.log(photo);
    const myPhoto = photo.photo;
    const name = photo.name;
    const likes = photo.likes;
    const category = photo.category;

    const base64 = Buffer.from(myPhoto.data.data, 'binary').toString('base64');
    console.log(base64);
    return (
        <div className='photoCard'>
            <img src={`data:image/jpg;base64,${base64}`} alt={name} />
            <h4>{name}</h4>
            <p>{category}</p>
            <h5>{likes}</h5>
        </div>
    )
}

export default PhotoCard;