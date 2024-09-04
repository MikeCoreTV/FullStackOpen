
const Course = (props) => {
  const total = props.courses.parts.reduce((s, p) => s + p.exercises, 0)
  return (
    <div>
      <h1>{props.courses.name}</h1>
      {props.courses.parts.map((part) => <p key={part.id}>{part.name + " " + part.exercises}</p>)}
      <b>Total of {total} exercises</b>
    </div> 
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses = {courses[0]}/>
      <Course courses = {courses[1]}/>
    </div>
  )
}

export default App