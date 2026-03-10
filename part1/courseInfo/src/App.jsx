

const Header = (props) => {
  console.log(props)
  return(<h1>{props.course}</h1>)
}

const Part = (props) => {
  return(<p> {props.part} {props.exercise}</p>)
}

const Content = (props) => {
  return(
    <div>
      <Part part = {props.part1} exercise = {props.exer1}/>
      <Part part = {props.part2} exercise = {props.exer2}/>
      <Part part = {props.part3} exercise = {props.exer3}/>
    </div>
  )
}

const Total = (props) => {
  return (<p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>)
}
const App = () => {
  const course = { name:  'Half Stack application development',
  parts :[{
    name: 'Fundamentals of React',
    exercises: 10
  }
  ,
  {
    name: 'Using props to pass data',
    exercises: 7
  }
  ,
  {
    name: 'State of a component',
    exercises: 14
  }
  ]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content part = {course.parts}/>
      <Total part = {course.parts}/>
    </div>
  );
}

export default App;