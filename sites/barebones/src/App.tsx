import { useState, useCallback } from 'react'
import { getRandomFact, type StateFact } from './statesData'
import './App.css'

function App() {
  const [fact, setFact] = useState<StateFact>(getRandomFact)

  const nextFact = useCallback(() => {
    let next: StateFact
    do {
      next = getRandomFact()
    } while (next.state === fact.state)
    setFact(next)
  }, [fact.state])

  return (
    <div className="app">
      <h1 className="title">U.S. State Facts</h1>
      <div className="card">
        <h2 className="state-name">{fact.state}</h2>
        <div className="details">
          <span className="badge capital">🏛️ {fact.capital}</span>
          <span className="badge nickname">📛 {fact.nickname}</span>
        </div>
        <p className="fact">{fact.fact}</p>
        <button className="next-btn" onClick={nextFact}>
          Show Another State →
        </button>
      </div>
    </div>
  )
}

export default App
