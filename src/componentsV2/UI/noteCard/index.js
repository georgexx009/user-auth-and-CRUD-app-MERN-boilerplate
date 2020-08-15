import React from 'react';
import './index.scss';
import Button from '../button';

const NoteCard = ({ title, description, url }) => {
  const viewNote = () => {
    window.open(url);
  };

  return (
    <div className="note-card">
      <p className="note-title">{title}</p>
      <p className="note-description">{description}</p>
      <div className="footer">
        <Button lbl="view note" handleClick={viewNote} />
      </div>
    </div>
  );
};

export default NoteCard;
