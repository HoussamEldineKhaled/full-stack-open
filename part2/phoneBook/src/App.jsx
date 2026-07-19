import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import './App.css'

function App() {
  const [persons, setPersons] = useState([
    {id: 1, name: 'Arlo Helas', number: '70-246-578'}, 
    {id: 2, name: 'Arturo Yonas', number: '80-987-333'}, 
    {id: 3, name: 'Alberto Margarette', number: '90-566-3456'}])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])



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
