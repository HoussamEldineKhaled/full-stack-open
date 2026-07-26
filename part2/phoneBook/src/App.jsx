import { useState , useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import './App.css'
import axios from 'axios'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      console.log("Promise fulfilled")
      setPersons(response.data)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} filteredPersons={filteredPersons} setFilteredPersons={setFilteredPersons}/>
      <h2>Add a new</h2>
      <PersonForm persons={persons} 
      filteredPersons={filteredPersons} newName={newName} 
      newNumber={newNumber}
        setNewName={setNewName} setNewNumber={setNewNumber} 
        setPersons={setPersons} setFilteredPersons={setFilteredPersons}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App
