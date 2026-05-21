import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = newValue => {
    console.log("current value", newValue)
    setGood(newValue)
  }

    const incrementNeutral = newValue => {
    console.log("current value", newValue)
    setNeutral(newValue)
  }

    const incrementBad = newValue => {
    console.log("current value", newValue)
    setBad(newValue)
  }
  const total = good + bad + neutral

  return (
  <div>
    <h1>give feedback</h1>
    <div>
      <Button onClick={() => incrementGood(good + 1)} text="good"/>
      <Button onClick={() => incrementNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => incrementBad(bad + 1)} text="bad"/>
    </div>

    <h1>statistics</h1>
    <br/>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {total}</p>
    <p>average {(good - bad) / total}</p>
    <p>positive {(good / total) * 100} %</p>
  </div>)
}

export default App
