import React, { useEffect } from 'react'
import './App.css'

function App() {
useEffect(() => {
  const button = document.createElement('button')

  button.textContent = 'Click me'
  document.getElementById('root').appendChild(button)

  button.addEventListener('click', () => {
    alert('Button clicked!')
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
    </>
  )
}

export default App
