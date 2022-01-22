import './App.css'

import People from './components/People';
import Events from './components/Events';

function App() {

  return (
    <div className="App">
      <h2 className="main-header">Select Date</h2>
      <People />
      <Events />
    </div>
  )
}

export default App;