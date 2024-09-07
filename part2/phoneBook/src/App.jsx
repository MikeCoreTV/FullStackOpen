import { useState } from 'react'

const NewSearch = (props) => {
  const filteredPersons = props.persons.filter(person => 
    person.name.toLowerCase().includes(props.search.toLowerCase())
  )

  if (filteredPersons.length > 0) {
    return (
      <div>
        {filteredPersons.map(person => (
          <p key={person.name}>{person.name} #{person.number}</p>
        ))}
      </div>
    )
  } else {
    return (
      <p>{`No results found for "${props.search}"`}</p>
    )
  }
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addNumber = (event) => {
    if (persons.find(person => person.name === newName)) {
      event.preventDefault()
      alert(`${newName} is already added to phonebook`)
    } else if (persons.find(person => person.number === newNumber)){
      event.preventDefault()
      alert(`${newNumber} is already added to phonebook`)
    } else {
    event.preventDefault()
    const noteObject = {
      name: newName, number: newNumber
    }
  
    setPersons(persons.concat(noteObject))
    setNewName('')
  }}
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleName = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with 
        <input 
          value={search}
          onChange={handleSearch}
        />
      </div>
      <h2>Add New</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input
          value={newName}
          onChange={handleName}
          />
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handleNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <NewSearch persons={persons} search={search}/>

      <div>debug: {newName + ' ' + newNumber}</div>
    </div>
  )
}

export default App