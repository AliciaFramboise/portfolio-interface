import React, { useEffect, useState } from "react";
import axios from "axios";
import './Projects.css';

export default function Projects() {

  const [artworks, setArtworks] = useState([{}])
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: null,
  });


  /* *** GET ARTWORK *** */
  const fetchArtworks = async () => 
  {
    const artworks = await axios.get(`http://127.0.0.1:8000/artwork`);
    setArtworks(artworks.data)
  }

  useEffect(() => {
    fetchArtworks()
  }, [])

  /* *** POST ARTWORK *** */
  const addArtwork = async (event) => 
  {
    event.preventDefault();

    await axios.post(`http://127.0.0.1:8000/artwork`, 
    formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
          .then(() => {  
            refreshForm();
            fetchArtworks();
          })
          .catch(error => console.error('Could not create this artwork', error));
  }

  /* *** DELETE ARTWORK *** */
  const deleteArtwork = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/artwork/${id}`)
      .then(() => console.log("Successfully delete artwork"))
      .catch(error => console.error('Could not delete this artwork', error));
    fetchArtworks();
  }

  function refreshForm() {
    setFormData({
      username: '',
      password: '',
      file: null,
    });
  }

  const handleInputChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };


    return (
      <div className="project-container">
        <h1> Your current work </h1>
        <div className="artworks-container">
          {artworks.map(artwork => (
              <div key={artwork.id} className="artwork-card">
                <h2>
                  {artwork.title}
                </h2>
                <p>
                  {artwork.description}
                </p>
                <p>
                  {artwork.file}
                </p>
                <button onClick={() => deleteArtwork(artwork.id)}> DELETE </button>
            </div>
          ))}
        </div>

        <div className="add-work">
          <form className="artwork-form" onSubmit={addArtwork}>
              <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Title" />
              <input type="text" name="description" value={formData.description} onChange={handleInputChange} placeholder="Description"/>
              <input type="file" name="file" onChange={handleInputChange}/>
            <button type="submit">ADD</button>
          </form>
        </div>
      </div>
      )
  }