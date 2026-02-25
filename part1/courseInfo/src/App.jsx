

const Header = (props) => {
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
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React'
  const ex1 = 10
  const part2 = 'Using props to pass data'
  const ex2 = 7
  const part3 = 'State of a component'
  const ex3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exer1 = {ex1} exer2 = {ex2} exer3 = {ex3}/>
      <Total ex1 = {ex1} ex2 = {ex2} ex3 = {ex3}/>
    </div>
  );
}

export default App;