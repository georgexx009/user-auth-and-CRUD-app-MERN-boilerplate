import React, { useState } from 'react';
import './index.scss';

import Button from '../../UI/button';
import { saveNewNote } from '../../../services';

const NoteForm = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [url, setUrl] = useState();

  const saveClick = async () => {
    console.log('click');
    const newNote = await saveNewNote({
      title,
      description,
      url,
    });
    console.log(newNote);
  };

  return (
    <div className="note-form">
      <input
        type="text"
        className="title-input"
        placeholder="title ..."
        onChange={e => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        placeholder="summary"
        className="description-textarea"
        onChange={e => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="text"
        className="title-input"
        placeholder="url ..."
        onChange={e => {
          setUrl(e.target.value);
        }}
      />
      <div className="footer">
        <Button lbl="save note" handleClick={saveClick} />
      </div>
    </div>
  );
};

export default NoteForm;
