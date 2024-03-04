import blogData from '../../assets/data/data.js'

const Media = () => {
  return (
    <main className='blogSingleItems'>
      <img
        src={blogData[4].img_url}
        alt=''
      />
      <h2>{blogData[4].title}</h2>
      <p>{blogData[4].description}</p>
      <p>{blogData[4].author}</p>
    </main>
  )
}

export default Media
