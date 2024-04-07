import React from 'react';
import axios from 'axios';
import AuthenticationContext from '../utils/AuthenticationContext';

function UserDetails() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [uploads, setUplaods] = React.useState(null);

    const { token } = React.useContext(AuthenticationContext);
    console.log(token);



    React.useEffect(() => {
        console.log('hello', Date.now());
        axios.get('http://localhost:3001/user/get-user', {
            headers: {
                'token': localStorage.getItem('token')
            }
        })
            .then(response => response.data)
            .then(data => {
                console.log(data);
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setEmail(data.email);
                setAddress(data.address);
                setPhone(data.phone);
                setUplaods(data.uploads);
            })

    }, []);

    console.log(uploads);
    console.log(firstName);

    return (
        <>
            {firstName && <div className='userDetails'>
                <h1>About me</h1>
                <h4>First Name</h4>
                <h3>{firstName}</h3>
                <h4>Last Name</h4>
                <h3>{lastName}</h3>
                <h4>Email</h4>
                <h3>{email}</h3>
                <h4>Phone</h4>
                <h3>{phone}</h3>
                <h4>Address</h4>
                <h3>{address}</h3>
                <h4 className='uploadCount'>Upload Count: </h4>
                <span>{uploads.length}</span>
            </div>}
        </>
    )
};

export default UserDetails;