import './App.css'
import BasicGrid from './components/BasicGrid'
import InitialSort from './components/InitialSort'

function App() {

  return (
    <>
      <div>
        <h2>Basic Grid</h2>
        <BasicGrid />
        <h2>Sortable Grid</h2>
        <InitialSort />
      </div>
    </>
  )
}

export default App
