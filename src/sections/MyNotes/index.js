import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
import NoteCard from '../../componentsV2/UI/noteCard';
import NoteForm from '../../componentsV2/containers/noteForm';

import { retrieveAllNotes } from '../../services';
import { aboutNotesSection } from '../../constants/dataForComponents';

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const { userName, admin } = useSelector(state => state.userInfo);

  useEffect(() => {
    retrieveAllNotes().then(newNotes => {
      console.log(newNotes);
      setNotes(newNotes);
    });
  }, []);

  return (
    <div className="my-notes">
      <p className="about-notes-section">{aboutNotesSection}</p>
      <hr className="break-line" />
      {admin && <NoteForm />}
      {notes.map((note, i) => (
        <NoteCard
          key={i}
          title={note.title}
          description={note.description}
          url={note.url}
        />
      ))}
    </div>
  );
};

export default MyNotes;
