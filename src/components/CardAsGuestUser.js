import React from 'react';
import { Buffer } from 'buffer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';


function CardAsGuestUser({ photo }) {
    // console.log(photo);
    const binaryImage = photo.photo.data.data;
    const base64Image = Buffer.from(binaryImage, 'binary').toString('base64');
    const imageName = photo.name;
    const imageLikes = photo.likes;
    const imageCategory = photo.category;
    const photoId = photo._id;
    const navigate = useNavigate();
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
                    <FontAwesomeIcon className='likeIcon' icon={faHeart} />
                    <h5 className='imageLike'>{imageLikes}</h5>
                </div>
            </div>
        </div>
    )
}

export default CardAsGuestUser;