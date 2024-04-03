import React from 'react';

function Footer() {
    return (
        <div className='footer'>
            <p>&#169; SnapStock, {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer;