import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Note from './components/note'


function App(props) {
  const [notes, setNotes] = useState(props.notes)
  const addNote = (event) => {
    event.preventDefault()
    console.log()
  }

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
