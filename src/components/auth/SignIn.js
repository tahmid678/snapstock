import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import AuthenticationContext from '../../utils/AuthenticationContext';
import baseURL from '../../utils/BaseURL';

function SignIn() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [responseMessage, setResponeseMessage] = React.useState('');
    const [alert, setAlert] = React.useState(false);

    const navigate = useNavigate();
    const { setToken } = React.useContext(AuthenticationContext);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const signInData = {
            email: email,
            password: password
        }

        try {
            const signInResponse = await axios.post(`${baseURL}/user/signin`, signInData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const { token, message, status } = signInResponse.data;
            setAlert(prevState => !prevState);
            setResponeseMessage(message);
            localStorage.setItem('token', token);
            setToken(token);
            if (status === "Success") {
                setTimeout(() => {
                    navigate('/profile');
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

    return (
        <div className='loginComponent'>
            {alert && <div className='alertMessage'>
                <p>{responseMessage}</p>
            </div>}
            <div className='loginFormContainer'>
                <form onSubmit={handleSubmit}>
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
                    <div className='formButton'>
                        <input
                            type='submit'
                            value="Sign In"
                            className='inputButton'
                        />
                    </div>
                    <p onClick={() => navigate('/signup')}>Do not have an account? Sign up here..</p>
                </form>
            </div>
        </div>
    )
}

export default SignIn;