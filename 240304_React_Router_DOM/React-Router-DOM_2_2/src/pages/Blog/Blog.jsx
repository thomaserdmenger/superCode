import blogData from '../../assets/data/data.js'
import BlogItem from '../../components/BlogItem/BlogItem.jsx'
import './Blog.css'

const Blog = () => {
  return (
    <main>
      <section className='blog'>
        <BlogItem data={blogData} />
      </section>
    </main>
  )
}

export default Blog
