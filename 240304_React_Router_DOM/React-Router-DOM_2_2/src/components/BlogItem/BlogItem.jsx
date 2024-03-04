import { Link } from 'react-router-dom'
import './BlogItem.css'

const BlogItem = ({ data }) => {
  return data.map((item) => {
    return (
      <article
        className='blogItem'
        key={item.id}>
        <img
          src={item.img_url}
          alt={item.title}
        />
        <h3>{item.title}</h3>
        <Link
          className='button'
          to={`/blog/${item.id}`}>
          Zum Artikel
        </Link>
      </article>
    )
  })
}

export default BlogItem
