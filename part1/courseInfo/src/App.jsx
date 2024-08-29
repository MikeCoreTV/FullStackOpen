const Header = (head) => {
  return (
    <div>
      <h1>{head.course}</h1>
    </div>
)
}

const Part = ({part, exercises}) => {
  return (
  <div>
    <p>
      {part} | exercises: {exercises}
    </p>
  </div>
)
}
const Content = (cont) => {
  return (
    <div>
      <Part part={cont.parts[0].name} exercises={cont.parts[0].exercises}/>
      <Part part={cont.parts[1].name} exercises={cont.parts[1].exercises}/>
      <Part part={cont.parts[2].name} exercises={cont.parts[2].exercises}/>
    </div>
)
}

const Total = (tot) => {
  return (
    <div>
      <p>Number of exercises {tot.parts[0].exercises + tot.parts[1].exercises + tot.parts[2].exercises}</p>
    </div>
)
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App