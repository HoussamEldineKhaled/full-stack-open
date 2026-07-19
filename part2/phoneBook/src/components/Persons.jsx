

const Persons = ({filteredPersons}) => {
    return(      
    <div>
        <ul>{filteredPersons.map(person => <div key={person.id}><p>{person.name} {person.number}</p></div>)}</ul>
    </div>)
}
export default Persons