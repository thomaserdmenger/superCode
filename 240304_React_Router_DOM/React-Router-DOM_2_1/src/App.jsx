import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Speisekarte from './pages/Speisekarte/Speisekarte'
import Header from './components/Header/Header'
import Kontakt from './pages/Kontakt/Kontakt'
import Oeffnungszeiten from './pages/Oeffnungszeiten/Oeffnungszeiten'
import Galerie from './pages/Galerie/Galerie'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Speisekarte />}
        />
        <Route
          path='/kontakt'
          element={<Kontakt />}
        />
        <Route
          path='/oeffnungszeiten'
          element={<Oeffnungszeiten />}
        />
        <Route
          path='/galerie'
          element={<Galerie />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
