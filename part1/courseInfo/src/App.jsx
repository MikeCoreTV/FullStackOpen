const Header = (head) => {
  return (
    <div>
      <h1>{head.course}</h1>
    </div>
)
}

const Content = (cont) => {
  return (
    <div>
      <p>
        {cont.part1} {cont.exercises1}
      </p>
      <p>
        {cont.part2} {cont.exercises2}
      </p>
      <p>
        {cont.part3} {cont.exercises3}
      </p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App