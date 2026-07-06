

const Header = (props) => {
  console.log(props)
  return(<h1>{props.course}</h1>)
}

const Part = (props) => {
  return(<p> {props.part} {props.exercise}</p>)
}

const Content = ({ parts }) => {
  return(
    <div>
      {parts.map(pa =>(<div>{<Part key={pa.id} part = {pa.name} exercise = {pa.exercises}/>}</div>) )}
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
  const course = [{ 
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
    ],

  },
  {
    id: 2,
    name: 'Node.js',
    parts: 
    [
      {
        id: 1,
        name: 'Routing',
        exercises: 3
      },
      {
        id: 2,
        name: 'Middlewares',
        exercises: 7
      }
    ]
  }
]
  return (
    <div>
      {course.map(c => <Course key={c.id} course={c}/>)}
    </div>
  );
}

export default App;