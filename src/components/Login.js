import React from 'react';

function Login() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [profileImage, setProfileImage] = React.useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('profileImage', profileImage);
    }

    return (
        <div className='loginFormContainer'>
            <form>
                <div className='formInput'>
                    <label for='firstName' className='formLabel'>First Name</label>
                    <input
                        id='firstName'
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className='formInput'>
                    <label for='lastName' className='formLabel'>Last Name</label>
                    <input
                        id='lastName'
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className='formInput'>
                    <label for="email" className='formLabel'>Email</label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='formInput'>
                    <label for="password" className='formLabel'>Password</label>
                    <input
                        id='password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='formInput'>
                    <label for="address" className='formLabel'>Address</label>
                    <input
                        id='address'
                        type='text'
                        name='address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className='formInput'>
                    <label for="phone" className='formLabel'>Phone</label>
                    <input
                        id='phone'
                        type='text'
                        name='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className='formInput'>
                    <label for="profileImage" className='formLabel'>Profile Image</label>
                    <input
                        id='profileImage'
                        type='file'
                        name='profileImage'
                        value={profileImage}
                        onChange={(e) => setProfileImage(e.target.files[0])}
                    />
                </div>
                <div className='formButton'>
                    <input
                        type='submit'
                        value="Sign Up"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </div>
    )
}

export default Login;