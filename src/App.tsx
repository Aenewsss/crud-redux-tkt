import { useState } from 'react'
import UsersList from './components/UsersList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <UsersList />
    </div>
  )
}

export default App
