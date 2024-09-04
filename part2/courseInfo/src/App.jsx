
const Course = (props) => {
  let total = 0
  return (
    <div>
      <h1>{props.course.name}</h1>
      {props.course.parts.map((part) => <p key={part.id}>{part.name + " " + part.exercises}</p>)}
      {props.course.parts.map((part) =>{total = part.exercises + total})}
      <b>Total of {total} exercises</b>
    </div>
    
    
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.sumOfExercises}</p>
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

export default App