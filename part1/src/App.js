const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  const Part = (props) => {
    return (
      <div>
        <p>
          {props.partVar} {props.exerciseVar}
        </p>
      </div>
    )
  }

  const Content = () =>  {
    return (
      <div>
        <Part partVar={part1} exerciseVar={exercises1}/>
        <Part partVar={part2} exerciseVar={exercises2} />
        <Part partVar={part3} exerciseVar={exercises3} />
      </div>
    )
  }

  const Header = () => {
    return (
      <p>The name of the course is {course}</p>
    )
  } 

  const Total = () => {
    return (
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    )
  }   

  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total/>
    </div>
  )
  
}

export default App