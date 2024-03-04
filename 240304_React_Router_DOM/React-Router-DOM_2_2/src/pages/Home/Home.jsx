import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='wrapper'>
      <main>
        <article>
          <h1>Welcome to my simple Blog</h1>
          <Link to='/blog'>Go to articles</Link>
        </article>
      </main>
    </main>
  )
}

export default Home
