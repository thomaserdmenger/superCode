import blogData from '../../assets/data/data.js'

const Life = () => {
  return (
    <main>
      <img
        src={blogData[5].img_url}
        alt=''
      />
      <h2>{blogData[5].title}</h2>
      <p>{blogData[5].description}</p>
      <p>{blogData[5].author}</p>
    </main>
  )
}

export default Life
