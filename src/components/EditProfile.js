import React from 'react';

function EditProfile() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');


    return (
        <div className='editProfileContainer'>
            <form>
                <div className='formInput'>
                    <label htmlFor='firstName' className='formLabel'>First Name</label>
                    <input
                        id='firstName'
                        type='text'
                        name='firstName'
                        className='inputClass'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='lastName' className='formLabel'>Last Name</label>
                    <input
                        id='lastName'
                        type='text'
                        name='lastName'
                        className='inputClass'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='email' className='formLabel'>Email</label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        className='inputClass'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='address' className='formLabel'>Address</label>
                    <input
                        id='address'
                        type='text'
                        name='address'
                        className='inputClass'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='phone' className='formLabel'>Phone</label>
                    <input
                        id='phone'
                        type='text'
                        name='phone'
                        className='inputClass'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className='formButton'>
                    <input
                        type='submit'
                        value="Submit"
                        className='inputButton'
                    />
                </div>
            </form>
        </div>
    )
}

export default EditProfile;