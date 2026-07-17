import { useState } from 'react'

import './App.css'

function App() {
  const [persons, setPersons] = useState([{id: 1, name: 'Arlo Helas'}])
  const [newNames, setNewNames] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewNames(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    const ifExists = persons.some((person) => person.name === newNames)

    if (ifExists){
      alert(`${newNames} is already added to phonebook`)
      setNewNames("")
      return;
    }

    const newPerson = {
      id: persons.length + 1,
      name: newNames
    }

    

    setPersons(persons.concat(newPerson))
    console.log("Added")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name : <input value={newNames} onChange={handleNameChange}/> 
        </div>
        <div>
          <button type='submit' onClick={addName}>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      <ul>{persons.map(person => <p key={person.id}>{person.name}</p>)}</ul>
      </div>
    </div>
  )
}

export default App
