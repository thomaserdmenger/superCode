import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  console.log(isHomePage)
  console.log(location)

  return (
    <header>
      <div
        className='header'
        style={{
          backgroundImage: isHomePage
            ? 'url(../../../public/images/header.jpeg)'
            : 'none',
          minHeight: isHomePage ? '40vh' : '0'
        }}>
        <p>My Life</p>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
