import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNumber = (event) => {
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else if (persons.find(person => person.number === newNumber)){
      alert(`${newNumber} is already added to phonebook`)
    } else {
    event.preventDefault()
    const noteObject = {
      name: newName, number: newNumber
    }
  
    setPersons(persons.concat(noteObject))
    setNewName('')
  }}
  
  const handleName = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
            {persons.map(person => (
        <p key={person.name}>{person.name + ' #' + person.number}</p>
      ))}
      <div>debug: {newName + ' ' + newNumber}</div>
    </div>
  )
}

export default App