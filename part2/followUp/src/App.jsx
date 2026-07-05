import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Note from './components/note'


function App({ notes }) {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note}/>
        )}
      </ul>
    </div>
    )
}


export default App
