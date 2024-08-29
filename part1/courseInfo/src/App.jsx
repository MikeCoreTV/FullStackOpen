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
      <Part part={cont.part1} exercises={cont.exercises1}/>
      <Part part={cont.part2} exercises={cont.exercises2}/>
      <Part part={cont.part3} exercises={cont.exercises3}/>
    </div>
)
}

const Total = (tot) => {
  return (
    <div>
      <p>Number of exercises {tot.exercises1 + tot.exercises2 + tot.exercises3}</p>
    </div>
)
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App