import blogData from '../../assets/data/data.js'

const Hobbys = () => {
  return (
    <main>
      <img
        src={blogData[3].img_url}
        alt=''
      />
      <h2>{blogData[3].title}</h2>
      <p>{blogData[3].description}</p>
      <p>{blogData[3].author}</p>
    </main>
  )
}

export default Hobbys
