import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
    }
  
    setPersons(persons.concat(noteObject))
    setNewName('')
  }

  const handleName = (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
          value={newName}
          onChange={handleName}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
            {persons.map(person => (
        <p key={person.name}>{person.name}</p>
      ))}
      <div>debug: {newName}</div>
    </div>
  )
}

export default App