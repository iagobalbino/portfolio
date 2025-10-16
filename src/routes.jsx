import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Header from './components/Header'
import Container from './components/Container'

function AppRoutes() {

  return (
    <BrowserRouter>
      <Container>
        <Header />
      </Container>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
