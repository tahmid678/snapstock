import React from 'react';
import { Buffer } from 'buffer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';


function PhotoDetailsCard({ photo, likeOrUnlikePhoto }) {
    console.log(photo);
    const binaryImage = photo.photo.data.data;
    const base64Image = Buffer.from(binaryImage, 'binary').toString('base64');
    const imageName = photo.name;
    const imageLikes = photo.likes;
    const imageAuthor = photo.author.firsName;
    const imageCategory = photo.category;
    const photoId = photo._id;
    const navigate = useNavigate();
    const likes = photo.author.likes;
    const authorId = photo.author._id;
    const mode = likes.includes(photoId);
    const authorLikes = photo.author.likes;
    const likedByAuthor = authorLikes.includes(photoId);
    return (
        <div className='photoDetailsCard'>
            <img src={`data:image/jpg;base64,${base64Image}`} alt={imageName} />
            <h3 className='imageName'>{imageName}</h3>
            <h4 className='imageCategory'>{imageCategory}</h4>
            <div className='imageNavigation'>
                <div className='imageDetailsButton'>
                    <button onClick={() => navigate('/photo-details', { replace: false, state: { photoId } })}>Details</button>
                </div>
                <div className='imageLikeInfo'>
                    <FontAwesomeIcon className='likeIcon' icon={faHeart} style={likedByAuthor ? { color: "red" } : { color: 'gray' }} onClick={() => {
                        if (!mode) {
                            likeOrUnlikePhoto('like', photoId);
                        } else {
                            likeOrUnlikePhoto('unlike', photoId);
                        }
                    }} />
                    <h5 className='imageLike'>{imageLikes}</h5>
                </div>
            </div>
        </div>
    )
}

export default PhotoDetailsCard;