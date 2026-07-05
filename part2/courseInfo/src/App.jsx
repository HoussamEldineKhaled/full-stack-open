

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
      <Part part = {props.parts[0].name} exercise = {props.parts[0].exercises}/>
      <Part part = {props.parts[1].name} exercise = {props.parts[1].exercises}/>
      <Part part = {props.parts[2].name} exercise = {props.parts[2].exercises}/>
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (<p style={{ fontWeight : 'bold' }}>Number of exercises {total}</p>)
}

const Course = ({ course }) => {
  return(
    <div>
      <Header course={course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

const App = () => {
  const course = { 
    id: 1,
    name:  'Half Stack application development',
    parts :[{
      id: 1,
      name: 'Fundamentals of React',
      exercises: 10
    }
    ,
    {
      id: 2,
      name: 'Using props to pass data',
      exercises: 7
    }
    ,
    {
      id: 3,
      name: 'State of a component',
      exercises: 14
    },
    {
      id: 4,
      name: "Redux",
      exercises: 11
    }
    ]
  }
  return (
    <div>
      <Course course={course}/>
    </div>
  );
}

export default App;