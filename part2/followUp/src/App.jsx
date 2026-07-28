import { useState , useEffect} from 'react'
import Note from './components/note'
import axios from 'axios'
import noteService from './services/notes'


function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)
  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  useEffect(() => {
    noteService.getAll().then(response => {
      setNotes(response.data)
    })
  }, [])

  const toggleImportanceof = (id) => {
    const note = notes.find(n => n.id === id)
    const changeNote = {...note, important: !note.important}

      noteService.update(id, changeNote).then(response => {
        setNotes(notes.map(note => note.id === id ? response.data : note))
    })
  }



  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }
      noteService.create(noteObject).then(response => {
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
          <Note key={note.id} note={note} toggleImportance={() => {toggleImportanceof(note.id)}}/>
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
