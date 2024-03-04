import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <main className='wrapper'>
      <main>
        <article className='home'>
          <h1>Welcome to my simple Blog</h1>
          <Link
            className='button'
            to='/blog'>
            Go to articles
          </Link>
        </article>
      </main>
    </main>
  )
}

export default Home
