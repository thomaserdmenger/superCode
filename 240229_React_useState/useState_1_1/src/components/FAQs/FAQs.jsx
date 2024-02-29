import { useState } from 'react'
import './FAQs.css'

export default function FAQs() {
  const [faq, setFaq] = useState(false)

  return (
    <section className='faq'>
      <article className='faq__item'>
        <div className='faq__question'>
          <p>Why is React great?</p>
          <button onClick={() => setFaq((faq) => !faq)}>
            {faq ? '-' : '+'}
          </button>
        </div>
        <div className={`faq__answer ${faq ? '' : 'toggle'}`}>
          <p>Fast Learning Curve</p>
        </div>
      </article>
    </section>
  )
}
