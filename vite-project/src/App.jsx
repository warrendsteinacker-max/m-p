import React, { useEffect } from 'react'
import './App.css'

function App() {
useEffect(() => {
  const e = document.getElementById('H')

  if(e){
    e.textcontent = 'Hello World'
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
