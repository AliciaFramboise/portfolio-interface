import React, { useState } from 'react'
import './ArtworkCard.css';

export default function ArtworkCard({children, onDelete, onEdit}) {
    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState({
      title: children.title,
      description: children.description,
    });

    function handleSave() {
      setIsEditing(false);
      onEdit(children.id, formData);
    }

    function handleCancel() {
      setFormData({
        title: children.title,
        description: children.description,
      });
      setIsEditing(false);
    }

  return (
    <div>
        {isEditing ? (
          <div className="edit-artwork-card">
            <label for="title">Title</label>
            <input name="title" value={formData.title} onChange={(e) =>  setFormData({ ...formData, [e.target.name]: e.target.value })}/>

            <label for="description">Description</label>
            <textarea name="description" value={formData.description} onChange={(e) =>  setFormData({ ...formData, [e.target.name]: e.target.value })}/>
            <div className='card-foot'>
              <button onClick={handleSave}> SAVE </button>
              <button onClick={handleCancel}> CANCEL </button>
            </div>
        </div>
        ) : (
          <div key={children.id} className="artwork-card">
              <h2>
              {children.title}
              </h2>
              <p>
              {children.description}
              </p>
              <p>
              {children.filename}
              </p>
              <div className='card-foot'>
                  <button onClick={onDelete}> DELETE </button>
                  <button onClick={() => setIsEditing(true)}> EDIT </button>
              </div> 
          </div>
        )}
    </div>
  )
}
