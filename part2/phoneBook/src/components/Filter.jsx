import { useState } from 'react'

const Filter = ({persons, filteredPersons, setFilteredPersons}) => {
    const [searchName, setSearchName] = useState('')
    
  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearchName(event.target.value)

    const filterItems = persons.filter(
      persons => persons.name.toLowerCase().includes(event.target.value.toLowerCase()))
      setFilteredPersons(filterItems)
  }
    return(<div>filter shown with: <input value={searchName} onChange={handleSearchChange}/></div>)
}
export default Filter;