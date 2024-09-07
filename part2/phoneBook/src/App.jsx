import { useState } from 'react'
import NumbersShow from './components/NumbersShow'
import AddNew from './components/AddNew'
import NewSearch from './components/NewSearch'

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
    } 
    else if (persons.find(person => person.number === newNumber)){
      event.preventDefault()
      alert(`${newNumber} is already added to phonebook`)
    } 
    else {
      event.preventDefault()
      const noteObject = {
        name: newName, number: newNumber
      }
      setPersons(persons.concat(noteObject))
      setNewName('')
    }
  }
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
      <NewSearch handleSearch={handleSearch} search={search}/>
      <h3>Add New</h3>
      <AddNew newName={newName} newNumber={newNumber} handleName={handleName} handleNumber={handleNumber} addNumber={addNumber}/>
      <h3>Numbers</h3>
      <NumbersShow persons={persons} search={search}/>
    </div>
  )
}

export default App