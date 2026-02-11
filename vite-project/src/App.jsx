import React, { useEffect } from 'react'
import './App.css'

function App() {
useEffect(() => {
  const button1 = document.createElement('button')

  button1.textContent = 'Click me post'
  document.getElementById('root').appendChild(button1)

  button1.addEventListener('click', () => {
    fetch('http://localhost:3000/posts')
  })

  document.getElementById('H')


  const e = document
  if(e){
    e.textContent = 'Hello World'
  }
}, [])

  return (
    <>
      <div id='H'>
      </div>
      <div id='Top' > HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH </div>
    </>
  )
}

export default App
