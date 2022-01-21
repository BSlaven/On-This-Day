import { useState } from 'react'
import './App.css'

import People from './components/People';
import Events from './components/Events';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <People />
      <Events />
    </div>
  )
}

export default App;