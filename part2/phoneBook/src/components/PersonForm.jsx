

const PersonForm = ({persons,filteredPersons ,newName, newNumber, setNewName, setNewNumber, setPersons, setFilteredPersons}) => {
    
    const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
    }

    const addName = (event) => {
    event.preventDefault()

    const ifNameExists = persons.some((person) => person.name === newName)
    const ifNumberExists = persons.some((person) => person.number === newNumber)

    if (ifNameExists){
        alert(`${newName} is already added to phonebook`)
        setNewName('')
        setNewNumber('')
        return;
    }

    if(ifNumberExists){
        alert(`${newNumber} is already in the phonebook`)
        setNewName('')
        setNewNumber('')
        return;
    }

    const newPerson = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
    }

    setPersons(persons.concat(newPerson))
    setFilteredPersons(filteredPersons.concat(newPerson))
    console.log("Added")
    }

    return(<>
    <form>
        <div>
            name : <input value={newName} onChange={handleNameChange}/> 
        </div>
        <div>
            number : <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
            <button type='submit' onClick={addName}>Add</button>
        </div>
    </form>
</>)
}
export default PersonForm;