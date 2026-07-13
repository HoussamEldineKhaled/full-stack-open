import { useState } from 'react'

import './App.css'

function App() {
  const [persons, setPersons] = useState([{name: 'Arlo Helas'}])
  const [newNames, setNewNames] = useState('')


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name : <input/> 
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>

    </div>
  )
}

export default App
