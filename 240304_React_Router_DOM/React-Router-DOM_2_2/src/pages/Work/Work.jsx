import blogData from '../../assets/data/data.js'

const Work = () => {
  return (
    <main>
      <img
        src={blogData[2].img_url}
        alt=''
      />
      <h2>{blogData[2].title}</h2>
      <p>{blogData[2].description}</p>
      <p>{blogData[2].author}</p>
    </main>
  )
}

export default Work
