const NumbersShow = ({persons, search})=> {
    const filteredPersons = persons.filter(person => 
        person.name.toLowerCase().includes(search.toLowerCase())
    )
    
    if (filteredPersons.length > 0) {
        return (
        <div>
            {filteredPersons.map(person => (
                <p key={person.name}>{person.name} #{person.number}</p>
            ))}
        </div>
        )
    }   
    else {
        return (
            <div>
                <p> 
                    {`No results found for "${search}"`}
                </p>
            </div>
        )
        }
    }

export default NumbersShow