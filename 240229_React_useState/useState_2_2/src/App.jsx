import './App.css'
import Content from './components/Content/Content'
import { useState } from 'react'

export default function App() {
  const [darkLightMode, setDarkLightMode] = useState(false)

  const toggleDarkLight = () => {
    setDarkLightMode((darkLightMode) => !darkLightMode)
  }

  return (
    <div className={`wrapper ${darkLightMode ? 'darkLight' : ''}`}>
      <Content
        darkLightMode={darkLightMode}
        onClick={toggleDarkLight}
      />
    </div>
  )
}
