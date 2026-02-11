import React, { useEffect } from 'react'
import './App.css'

function App() {
useEffect(() => {
  const button1 = document.createElement('button')

  button1.textContent = 'Click me post'
  document.getElementById('root').appendChild(button1)

  button1.addEventListener('click', () => {
    const D = fetch('http://localhost:3000/posts', {method: 'GET', headers: {'content-type': 'application/json'}}).then((res)=> { return res.json()}).then((data)=> {console.log(data); alert(data)})
  })

  document.getElementById('H')


  const e = document
  if(e){
    e.textContent = 'Hello World'
  }
}, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/mposts', {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify())


  return (
    <>
      <div id='H'>
      </div>
      <div id='Top' > HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH </div>

      <form onSubmit={}>
        <input value={}></input>
        <input value={}></input>
        <button type='submit'>send to back</button>
      </form>
    </>
  )
}

export default App
