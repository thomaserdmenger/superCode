import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Pets from './pages/Pets/Pets'
import Plants from './pages/Plants/Plants'
import Work from './pages/Work/Work'
import Hobbys from './pages/Hobbys/Hobbys'
import Media from './pages/Media/Media'
import Life from './pages/Life/Life'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/blog'
          element={<Blog />}
        />
        <Route
          path='/blog/0'
          element={<Pets />}
        />
        <Route
          path='/blog/1'
          element={<Plants />}
        />
        <Route
          path='/blog/2'
          element={<Work />}
        />
        <Route
          path='/blog/3'
          element={<Hobbys />}
        />
        <Route
          path='/blog/4'
          element={<Media />}
        />
        <Route
          path='/blog/5'
          element={<Life />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
