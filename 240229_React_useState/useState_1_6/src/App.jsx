import { useState } from 'react'
import './App.css'

export default function App() {
  const [vorname, setVorname] = useState('')
  const [nachname, setNachname] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className='wrapper'>
      <form className='form'>
        <div className='form__inputs-container'>
          <input
            type='text'
            name='vorname'
            id='vorname'
            placeholder='Vorname'
            value={vorname}
            onInput={(e) => setVorname(e.target.value)}
          />
          <input
            type='text'
            name='nachname'
            id='nachname'
            placeholder='Nachname'
            value={nachname}
            onInput={(e) => setNachname(e.target.value)}
          />
          <input
            type='email'
            name='email'
            id='email'
            placeholder='E-Mail'
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
        </div>
      </form>
      <div className='form__output-container'>
        <p>Vorname: {vorname}</p>
        <p>Nachname: {nachname}</p>
        <p>E-Mail: {email}</p>
      </div>
    </div>
  )
}
