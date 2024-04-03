import React from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Buffer } from 'buffer';
import dateFormat from 'dateformat';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowComments from './ShowComments';

function PhotoDetailsComponent() {
    const [photo, setPhoto] = React.useState(null);
    const [name, setName] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState('');
    const [base64Image, setBase64Image] = React.useState('');
    const [imageLikes, setImageLikes] = React.useState(null);
    const [comment, setComment] = React.useState('');
    const [comments, setComments] = React.useState('');
    const [toggleComments, setToggleComments] = React.useState(false);

    const { state } = useLocation();
    const { photoId } = state;

    React.useEffect(() => {
        axios.get(`http://localhost:3001/photo/get-photo/${photoId}`)
            .then(response => response.data)
            .then(data => {
                setPhoto(data);
                setName(data.name);
                setFirstName(data.author.firstName);
                setDescription(data.description);
                setDate(dateFormat(data.date, 'dddd, mmmm, dS, yyyy'));
                const binaryImage = data.photo.data.data;
                setBase64Image(Buffer.from(binaryImage, 'binary').toString('base64'));
                setImageLikes(data.likes);
                setComments(data.comments);
            })
            .catch(err => console.log(err));
    }, [toggleComments])

    const handleSubmit = (e) => {
        e.preventDefault();
        const commentData = {
            name: firstName,
            comment: comment
        }

        axios.post(`http://localhost:3001/photo/create-comment/${photoId}`, commentData, {
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(response => response.data)
            .then(data => {
                setToggleComments(prevState => prevState ? false : true);
                setComment('');
            })
            .catch(err => console.log(err));
    }

    return (
        <>{photo &&
            <div className='photoDetailsComponent'>
                <div className='photoDetails'>
                    <img src={`data:image/jpg;base64,${base64Image}`} alt={name} />
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <div className='details'>
                        <div>
                            <h5>Uploaded By: {firstName}</h5>
                            <h5>{date}</h5>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                            <span className='likes'>{imageLikes}</span>
                        </div>
                    </div>
                    <div className='commentForm'>
                        <h4>Have your say about this photo..</h4>
                        <form onSubmit={handleSubmit}>
                            <textarea
                                type="text"
                                rows={6}
                                cols={30}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <input type='submit' value="Submit" />
                        </form>
                    </div>
                </div>
                <div className='commentsSection'>
                    <h2>Comments</h2>
                    {comments && comments.map(comment => <ShowComments key={Math.random()} comment={comment} />)}
                </div>
            </div>}
        </>
    )
}

export default PhotoDetailsComponent;