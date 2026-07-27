import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Note from './components/note'
import axios from 'axios'


function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)
  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/notes').then(response => {
      console.log('Promise fulfilled')
      setNotes(response.data)
    })
  }, [])
  console.log('render', notes.length, 'notes')


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: String(notes.length + 1),
      content: newNote,
      important: Math.random() < 0.5
    }
    axios.post('http://localhost:3001/notes', noteObject).then(response => {
      console.log(response)
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
  }

  const handleNoteChange = (event) =>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit' onClick={() => setShowAll(!showAll)}>{showAll ? 'important': 'all'}</button>
      </form>
    </div>
    )
}


export default App
