import {Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout/Layout'

function App() {

  return (
    <div>
      <Routes>
        <Route index path='/' element={<Layout />} />
      </Routes>
    </div>
  )
}

export default App
