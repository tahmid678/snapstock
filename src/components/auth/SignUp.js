import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import baseURL from '../../utils/BaseURL';

function SignUp() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [profileImage, setProfileImage] = React.useState(null);
    const [alert, setAlert] = React.useState(false);
    const [responseMessage, setResponeseMessage] = React.useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setResponeseMessage('Your password and confirm password field do not match!');
            setPassword('');
            setConfirmPassword('');
            setAlert(prevState => !prevState);
            setTimeout(() => {
                setAlert(prevState => !prevState);
            }, 2000);
        } else {
            const signUpData = new FormData();
            signUpData.append('firstName', firstName);
            signUpData.append('lastName', lastName);
            signUpData.append('email', email);
            signUpData.append('password', password);
            signUpData.append('address', address);
            signUpData.append('phone', phone);
            signUpData.append('profileImage', profileImage);

            try {
                const signUpResponse = await axios.post(`${baseURL}/user/signup`, signUpData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });

                const { status, message } = signUpResponse.data;
                setAlert(prevState => !prevState);
                setResponeseMessage(message);
                if (status === 'Success') {
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setTimeout(() => {
                    setAlert(prevState => !prevState);
                }, 2000);
            }
        }
    }

    return (
        <div className='loginComponent'>
            {alert && <div className='alertMessage'>
                <p>{responseMessage}</p>
            </div>}
            <div className='loginFormContainer'>
                <form onSubmit={handleSubmit}>
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
                        <label htmlFor="confirmPassword" className='formLabel'>Confirm Password</label>
                        <input
                            id='confirmPassword'
                            type='password'
                            name='confirmPassword'
                            className='inputClass'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                            onChange={(e) => setProfileImage(e.target.files[0])}
                        />
                    </div>
                    <div className='formButton'>
                        <input
                            type='submit'
                            value="Sign Up"
                            className='inputButton'
                        />
                    </div>
                    <p onClick={() => navigate('/login')}>Already have an account? Sign in here..</p>
                </form>
            </div>
        </div>
    )
}

export default SignUp;