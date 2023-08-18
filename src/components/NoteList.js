import React from 'react';
import Note from './Note';

function NoteList({ notes, onDelete, onEdit }) {
  return (
    <div className='rows'>
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} onDelete={() => onDelete(index)} onEdit={(title, content) => onEdit(index, title, content)}/>
      ))}
    </div>
  );
}

export default NoteList;
