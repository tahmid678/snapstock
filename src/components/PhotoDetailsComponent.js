import React from 'react';
import { useLocation } from 'react-router';

function PhotoDetailsComponent() {
    const { state } = useLocation();
    console.log(state);
    return (
        <div>PhotoDetailsComponent</div>
    )
}

export default PhotoDetailsComponent;