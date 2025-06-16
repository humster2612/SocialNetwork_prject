import React, { useState } from 'react';
import axios from 'axios';
import s from './CreatePost.module.css';

const CreatePost = ({ onPostCreated }) => {
  const [text, setText] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const currentUsername = currentUser?.username || 'Ты';


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result); 
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text || !imageFile) return alert('Enter text and select photo');

    const formData = new FormData();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
formData.append('user', currentUser?.username || 'Ты');
    formData.append('text', text);
    formData.append('image', imageFile);

    try {
      const res = await axios.post('http://localhost:1000/api/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setText('');
      setImageFile(null);
      setPreviewUrl(null);
      if (onPostCreated) onPostCreated(res.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h2>Create a post</h2>
      <textarea
        placeholder="What's new?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
     <label htmlFor="fileInput" className={s.uploadLabel}>
  📸 Upload Image
</label>
<input id="fileInput" type="file" accept="image/*" onChange={handleFileChange} />


      {previewUrl && (
        <img src={previewUrl} alt="preview" className={s.preview} />
      )}

      <button type="submit"> Publish</button>
    </form>
  );
};

export default CreatePost;
