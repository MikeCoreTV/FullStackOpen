const Course = ({courses}) => {
    const total = courses.parts.reduce((s, p) => s + p.exercises, 0)
    
    return (
      <div>
        {/*Course Title*/}
        <h1>{courses.name}</h1>

        {/*List of Parts*/}
        {courses.parts.map((part) =>(
            <p key={part.id}>
                    {part.name + " " + part.exercises}
            </p>
        ))}

        {/*Total of exercises*/}
        <b>
            Total of {total} exercises
        </b>
      </div> 
    )
  }

  export default Course