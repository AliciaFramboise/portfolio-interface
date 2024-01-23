import React, { useState } from 'react'
import './ArtworkCard.css';

export default function ArtworkCard({children, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(children.title);
    const [editedDescription, setEditedDescription] = useState(children.description);

    function handleEditView() {
      setIsEditing(true);
    }

    function handleCancel() {
      setIsEditing(false);
    }

  return (
    <div>
        {isEditing ? (
          <div className="edit-artwork-card">
            <textarea value={editedTitle} onChange={(event) => setEditedTitle(event.target.value)}/>
            <textarea value={editedDescription} onChange={(event) => setEditedDescription(event.target.value)}/>
            <div className='card-foot'>
              <button> SAVE </button>
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
                  <button onClick={handleEditView}> EDIT </button>
              </div> 
          </div>
        )}
    </div>
  )
}
