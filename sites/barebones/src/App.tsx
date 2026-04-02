import { useState, useCallback } from 'react'
import { getRandomFact, type StateFact } from './statesData'
import { AuthButton } from './components/AuthButton'
import { RequireAuth } from './components/RequireAuth'
import { RequireRole } from './components/RequireRole'
import { useAuth } from './hooks/useAuth'
import './App.css'

function App() {
  const [fact, setFact] = useState<StateFact>(getRandomFact)
  const { displayName } = useAuth()

  const nextFact = useCallback(() => {
    let next: StateFact
    do {
      next = getRandomFact()
    } while (next.state === fact.state)
    setFact(next)
  }, [fact.state])

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="title">🇺🇸 U.S. State Facts</h1>
        <AuthButton />
      </header>

      <RequireAuth fallback={<p className="auth-prompt">Sign in to explore facts about all 50 states!</p>}>
        <p className="welcome-msg">Welcome, {displayName}!</p>
      </RequireAuth>

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

      <RequireRole roles={['Administrators']} fallback={null}>
        <div className="admin-badge">🔧 Admin</div>
      </RequireRole>
    </div>
  )
}

export default App
