import blogData from '../../assets/data/data.js'

const Pets = () => {
  return (
    <main className='blogSingleItems'>
      <img
        src={blogData[0].img_url}
        alt=''
      />
      <h2>{blogData[0].title}</h2>
      <p>{blogData[0].description}</p>
      <p>{blogData[0].author}</p>
    </main>
  )
}

export default Pets
