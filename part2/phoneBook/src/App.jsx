import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [persons, setPersons] = useState([{name: 'Arlo Helas'}])
  const [newNames, setNewNames] = useState('')


  return (
    <div>
      <h2>Phonebook</h2>
      
    </div>
  )
}

export default App
