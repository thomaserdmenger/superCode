import styles from './Card.module.css'

const Card = ({ src, content, price, action }) => {
  return (
    <article className={styles.product}>
      <img
        src={src}
        alt='Product Image'
      />
      <p>{content}</p>
      <p>{price}</p>
      <a href='#'>{action}</a>
    </article>
  )
}

export default Card
