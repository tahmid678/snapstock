import React from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CardAsGuestUser from "./CardAsGuestUser";
import AuthenticationContext from "../utils/AuthenticationContext";
import PhotoDetailsCard from "./PhotoDetailsCard";

function SearchComponent() {
    const [searchResult, setSearchResult] = React.useState(null);
    const [likeToggle, setLikeToggle] = React.useState(false);
    const [userLikes, setUserLikes] = React.useState(null);
    const { state } = useLocation();
    const photoName = state.searchParams;
    console.log(photoName);

    const { token } = React.useContext(AuthenticationContext);

    React.useEffect(() => {
        axios.get('http://localhost:3001/user/get-user', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
            .then(response => response.data)
            .then(data => setUserLikes(data.likes))
            .catch(err => console.log(err))

        axios.get(`http://localhost:3001/photo/searchByName/${photoName}`, {
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(response => response.data)
            .then(data => setSearchResult(data))
            .then(err => console.log(err));
    }, [])

    React.useEffect(() => {
        axios.get(`http://localhost:3001/photo/searchByName/${photoName}`, {
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(response => response.data)
            .then(data => setSearchResult(data))
            .then(err => console.log(err));
        axios.get('http://localhost:3001/user/get-user', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
            .then(response => response.data)
            .then(data => setUserLikes(data.likes))
            .catch(err => console.log(err))
    }, [likeToggle]);

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

    console.log(searchResult);
    let photo = null;
    if (token) {
        if (searchResult && userLikes) {
            photo = <PhotoDetailsCard photo={searchResult} likeOrUnlikePhoto={likeOrUnlikePhoto} key={Math.random()} likes={userLikes} />;
        }
    } else {
        if (searchResult) {
            photo = <CardAsGuestUser photo={searchResult} key={Math.random()} />;
        }
    }
    return (
        <>
            {/* {searchResult !== null && token === null && <CardAsGuestUser photo={searchResult} key={Math.random()} />}
            {searchResult && token && <PhotoDetailsCard photo={searchResult} likeOrUnlikePhoto={likeOrUnlikePhoto} key={Math.random()} likes={userLikes} />} */}
            {photo}
        </>
    )
}

export default SearchComponent;