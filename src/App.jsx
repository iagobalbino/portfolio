import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projetos' element={<Projects />} />
        <Route path='*' element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
