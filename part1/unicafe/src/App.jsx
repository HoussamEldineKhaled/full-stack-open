import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Statistics = (props) => {
  if (!props.good && !props.neutral && !props.bad){
    return(<p>No feedback given</p>)
  }
  return(
  <div>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.total}</p>
    <p>average {(props.good - props.bad) / props.total}</p>
    <p>positive {(props.good / props.total) * 100} %</p>
  </div>)
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + bad + neutral


  return (
  <div>
    <h1>give feedback</h1>
    <div>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
    </div>

    <h1>statistics</h1>
    <br/>
    <Statistics good = {good} bad = {bad} neutral = {neutral} total = {total}/>
  </div>)
}

export default App
