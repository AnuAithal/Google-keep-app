import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

function App() {
  const initialNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const [notes, setNotes] = useState(initialNotes);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const updateNote = (index, updatedTitle, updatedContent) => {
    const newNotes = [...notes];
    newNotes[index] = {
      title: updatedTitle,
      content: updatedContent,
    };
    setNotes(newNotes);
  };


  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <div className='nav' style={{height:'60px'}}>
        <img src="data:image/png;base64,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" width="80" height="80" style={{ zIndex: 1, marginTop: '0px' }} />
        <h1 className='todo' style={{ zIndex: 1, marginTop: '11px', marginLeft: '5px', fontSize: '30px' }}>Keep Note</h1>
      </div>
      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={updateNote} />
    </div>
  );
}

export default App;
