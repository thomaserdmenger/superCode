import { Link } from 'react-router-dom'

const BlogItem = ({ data }) => {
  return data.map((item) => {
    return (
      <article key={item.id}>
        <img
          src={item.img_url}
          alt={item.title}
        />
        <h3>{item.title}</h3>
        <Link to={`/blog/${item.id}`}>Zum Artikel</Link>
      </article>
    )
  })
}

export default BlogItem
