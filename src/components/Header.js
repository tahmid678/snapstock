import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthenticationContext from '../utils/AuthenticationContext';
import { useNavigate } from 'react-router';


function Header() {
    const [searchValue, setSearchValue] = React.useState('');
    const { token, setToken } = React.useContext(AuthenticationContext);
    const navigate = useNavigate();
    console.log(token);

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchParams = searchValue;
        setSearchValue('');
        navigate('/search-result', { replace: false, state: { searchParams: searchParams } });
    }

    const handleRoute = (e) => {
        const category = e.target.innerText;
        navigate('/product-by-category', { replace: true, state: { category: category } })
    }
    return (
        <div className='heading'>
            <h2>SnapStock</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    role='search'
                    id='search'
                    name='search'
                    className='searchInput'
                    placeholder='Search by name...'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <input type='submit' value='Search' className='searchInput' />
            </form>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <div className="dropdown">
                        <button className="dropbtn">Categories</button>
                        <div className="dropdown-content">
                            <button onClick={handleRoute}>Sports</button>
                            <button onClick={handleRoute}>Gadgets</button>
                            <button onClick={handleRoute}>Books</button>
                        </div>
                    </div>
                </li>
                {token === null ?
                    null :
                    <li>
                        <NavLink to='/profile'>Profile</NavLink>
                    </li>
                }
                {token === null ?
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                    :
                    <li>
                        <NavLink to='/' onClick={() => {
                            localStorage.removeItem('token');
                            setToken(null);
                        }}>Log out</NavLink>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Header;