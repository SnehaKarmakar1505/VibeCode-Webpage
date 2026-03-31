import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [textColor, setTextColor] = useState('#000000')

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY })
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    setTextColor(randomColor)
  }

  return (
    <div className="app" onClick={changeColor}>
      <h1 
        className="swinging-text" 
        style={{ 
          position: 'absolute', 
          left: mousePos.x - 150, 
          top: mousePos.y - 50,
          color: textColor
        }}
      >
        Du Du Du Max Verstappen
      </h1>
    </div>
  )
}

export default App
