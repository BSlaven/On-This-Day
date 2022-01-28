import './App.css'

import People from './components/People/People';
import Events from './components/Events/Events';
import ToTopBtn from './components/ToTopBtn/ToTopBtn'

function App() {

  return (
    <div className="App">
      <ToTopBtn />
      <h2 className="main-header">On This Day</h2>
      <div className="container">
        <People />
        <Events />
      </div>
    </div>
  )
}

export default App;