import blogData from '../../assets/data/data.js'

const Pets = () => {
  return (
    <main>
      <img
        src={blogData[1].img_url}
        alt=''
      />
      <h2>{blogData[1].title}</h2>
      <p>{blogData[1].description}</p>
      <p>{blogData[1].author}</p>
    </main>
  )
}

export default Pets
