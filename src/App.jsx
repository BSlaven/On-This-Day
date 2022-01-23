import './App.css'

import People from './components/People/People';
import Events from './components/Events/Events';

function App() {

  return (
    <div className="App">
      <h2 className="main-header">Select Date</h2>
      <div className="container">
        {/* <People /> */}
        <Events />
      </div>
    </div>
  )
}

export default App;