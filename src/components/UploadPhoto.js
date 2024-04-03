import React from 'react';
import axios from 'axios';

function UploadPhoto() {
    const [name, setName] = React.useState('');
    const [category, setCategory] = React.useState('Sports');
    const [description, setDescription] = React.useState('');
    const [photo, setPhoto] = React.useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('photo', photo);

        const token = localStorage.getItem('token');
        axios.post('http://localhost:3001/photo/upload', formData, {
            headers: {
                "Content-Type": 'multipart/form-data',
                "token": token
            }
        })
            .then(response => response.data)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    return (
        <div className='uploadPhotoContainer'>
            <form onSubmit={handleSubmit}>
                <div className='formInput'>
                    <label htmlFor='name' className='formLabel'>Name</label>
                    <input
                        id='name'
                        type='text'
                        name='name'
                        className='inputClass'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='description' className='formLabel'>Description</label>
                    <textarea
                        id='description'
                        type='text'
                        name='description'
                        rows={6}
                        cols={40}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='category' className='formLabel'>Category</label>
                    <select
                        id='category'
                        name='category'
                        className='inputClass'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Sports">Sports</option>
                        <option value="Gadgets">Gadgets</option>
                        <option value="Nature">Nature</option>
                        <option value="Books">Books</option>
                        <option value="Foods">Foods</option>
                    </select>
                </div>
                <div className='formInput'>
                    <label htmlFor='photo' className='formLabel'>Select Photo</label>
                    <input
                        id='photo'
                        type='file'
                        name='photo'
                        className='inputClass'
                        onChange={(e) => setPhoto(e.target.files[0])}
                    />
                </div>
                <div className='formButton'>
                    <input type='submit' value="Submit" className='inputButton' />
                </div>
            </form>
        </div>
    )
}

export default UploadPhoto;