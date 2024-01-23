import React, { useEffect, useState } from "react";
import axios from "axios";
import './Projects.css';
import api from "../../api";
import ArtworkCard from "../../components/ArtworkCard/ArtworkCard";

export default function Projects() {

  const artwork_url = `${api}artwork`;
  const [artworks, setArtworks] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: null,
  });


  /* *** GET ARTWORK *** */
  const fetchArtworks = async () => 
  {
    const results = await axios.get(artwork_url);
    setArtworks(results.data);
  }

  useEffect(() => {
    fetchArtworks()
  }, [])

  /* *** POST ARTWORK *** */
  const addArtwork = async (event) => 
  {
    event.preventDefault();

    await axios.post(artwork_url, 
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
    await axios.delete(`${artwork_url}/${id}`)
      .then(() => console.log("Successfully delete artwork"))
      .catch(error => console.error('Could not delete this artwork', error));
    fetchArtworks();
  }

  function refreshForm() {
    setFormData({
      title: '',
      description: '',
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
        {artworks.length === 0 ? (<p>No artwork to display at the moment</p>) : (
          <div className="artworks-container">
          {artworks.map(artwork => (
             <ArtworkCard onDelete={() => deleteArtwork(artwork.id)}>{artwork}</ArtworkCard>
          ))}
        </div>
        )}

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