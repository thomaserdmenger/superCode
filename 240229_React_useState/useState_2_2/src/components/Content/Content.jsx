import './Content.css'

export default function Content({ onClick, darkLightMode }) {
  return (
    <section className='content'>
      <article>
        <h1>{darkLightMode ? 'Night' : 'Day'}</h1>
        <button
          className={darkLightMode ? 'darkLightToggle' : ''}
          onClick={onClick}>
          Change to {darkLightMode ? 'Day' : 'Night'}
        </button>
      </article>
    </section>
  )
}
