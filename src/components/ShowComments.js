import React from 'react';
import dateFormat from 'dateformat';

function ShowComments({ comment }) {
    return (
        <>
            <div className='individualComment'>
                <i><h3>{comment.name}</h3></i>
                <i><p>{comment.comment}</p></i>
                <p className='commentDate'>{dateFormat(comment.time, 'dddd, mmmm, dS, yyyy')}</p>
            </div>
            <hr />
        </>
    )
}

export default ShowComments;