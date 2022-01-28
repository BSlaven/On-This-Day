import { useState, useEffect } from 'react';
import './App.css'

import People from './components/People/People';
import Events from './components/Events/Events';
import ToTopBtn from './components/ToTopBtn/ToTopBtn'

function App() {
  
  const [ showButton, setShowButton ] = useState(false);

  const visible = () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', visible);
    return () => {
      window.removeEventListener('scroll', visible)
    }
  }, [])
  
  return (
    <div className="App">
      <ToTopBtn showButton={showButton} />
      <h2 className="main-header">On This Day</h2>
      <div className="container">
        <People />
        <Events />
      </div>
    </div>
  )
}

export default App;