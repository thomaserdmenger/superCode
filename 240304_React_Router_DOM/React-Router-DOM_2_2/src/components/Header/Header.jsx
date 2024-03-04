import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <p>My Life</p>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
      </nav>
    </header>
  )
}

export default Header
