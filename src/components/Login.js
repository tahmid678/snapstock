import React from 'react';

function Login() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [profileImage, setProfileImage] = React.useState('');
    const [mode, setMode] = React.useState('Sign In');


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        if (mode === 'Sign Up') {
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('address', address);
            formData.append('phone', phone);
            formData.append('profileImage', profileImage);

            console.log(formData);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setAddress('');
            setPhone('');
            setProfileImage('');
        } else {
            formData.append('email', email);
            formData.append('password', password);

            console.log(formData);
            setEmail('');
            setPassword('');
        }

    }

    const toggleMode = () => {
        setMode(prevMode => prevMode === 'Sign In' ? 'Sign Up' : 'Sign In')
    }

    return (
        <div className='loginFormContainer'>
            <form onSubmit={handleSubmit}>
                {mode === 'Sign Up' ?
                    <>
                        <div className='formInput'>
                            <label htmlFor='firstName' className='formLabel'>First Name</label>
                            <input
                                id='firstName'
                                type='text'
                                name='firstName'
                                className='inputClass'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
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
                                required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor="email" className='formLabel'>Email</label>
                            <input
                                id='email'
                                type='email'
                                name='email'
                                className='inputClass'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor="password" className='formLabel'>Password</label>
                            <input
                                id='password'
                                type='password'
                                name='password'
                                className='inputClass'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor="address" className='formLabel'>Address</label>
                            <input
                                id='address'
                                type='text'
                                name='address'
                                className='inputClass'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor="phone" className='formLabel'>Phone</label>
                            <input
                                id='phone'
                                type='text'
                                name='phone'
                                className='inputClass'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor="profileImage" className='formLabel'>Profile Image</label>
                            <input
                                id='profileImage'
                                type='file'
                                name='profileImage'
                                className='inputClass'
                                value={profileImage}
                                onChange={(e) => setProfileImage(e.target.files[0])}
                            />
                        </div>
                    </>
                    :
                    <>
                        <div className='formInput'>
                            <label htmlFor="email" className='formLabel'>Email</label>
                            <input
                                id='email'
                                type='email'
                                name='email'
                                className='inputClass'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor="password" className='formLabel'>Password</label>
                            <input
                                id='password'
                                type='password'
                                name='password'
                                className='inputClass'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </>
                }
                <div className='formButton'>
                    <input
                        type='submit'
                        value={mode}
                        className='inputButton'
                    />
                </div>
                <p onClick={toggleMode}>{mode === 'Sign Up' ? 'Already have an account? Sign In here..' : 'Do not have an account? Sign Up here..'}</p>
            </form>
        </div>
    )
}

export default Login;