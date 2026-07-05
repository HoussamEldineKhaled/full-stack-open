import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const StatisticLine = (props) => {
  return (<tr><td><p>{props.text}</p></td><td><p>{props.value}</p></td></tr>)
}

const Statistics = (props) => {
  const pos = (props.good / props.total) * 100
  const avg = (props.good - props.bad) / props.total
  if (!props.good && !props.neutral && !props.bad){
    return(<p>No feedback given</p>)
  }
  return(
  <div>
    <table>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.total} />
      <StatisticLine text="average" value={avg.toFixed(1)} />
      <StatisticLine text="positive" value={pos.toFixed(1) + "%"} />
    </table>
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
