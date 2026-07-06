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
      {parts.map(pa => <Part key={pa.id} part = {pa.name} exercise = {pa.exercises}/> )}
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

export default Course;