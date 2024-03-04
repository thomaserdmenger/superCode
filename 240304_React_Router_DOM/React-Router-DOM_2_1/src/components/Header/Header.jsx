import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to='/'>Speisekarte</NavLink>
        <NavLink to='/kontakt'>Kontakt</NavLink>
        <NavLink to='/oeffnungszeiten'>Öffnungszeiten</NavLink>
        <NavLink to='/galerie'>Galerie</NavLink>
      </nav>
    </header>
  )
}

export default Header
