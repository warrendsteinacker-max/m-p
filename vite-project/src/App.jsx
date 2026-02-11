import React, { useEffect, useReducer } from 'react'
import './App.css'




 const Istate = {
    name: '',
    age: ''
  }

  const reducer = (state, action) => {
    switch(action.type){
      case 'NAME':
        return {...state, name: action.payload}
      case 'AGE':
        return {...state, age: action.payload}
      default:
        return state
    }
  }

function App() {

  const [state, dispatch] = useReducer(reducer, Istate)

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/mposts', {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify(Istate)}).then((res) => {return res.json()}).then((data) => {console.log(data)}).catch((error)=> console.error(error.message))
  }


  return (
    <>
      <div id='H'>
      </div>
      <div id='Top' > HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH </div>

      <form onSubmit={handleSubmit}>
        <input value={state.name} type='text' onChange={(e) => dispatch({type: NAME, payload: e.target.value})}></input>
        <input value={state.age} type='text' onChange={(e) => dispatch({type: AGE, payload: e.target.value})}></input>
        <button type='submit'>post to back</button>
      </form>
      <button onclick={() => fetch('http://localhost:3000/posts', {method: 'GET', headers: {'content-type': 'application/json'}}).then((res)=> { return res.json()}).then((data)=> {console.log(data); alert(data)})}>Get back</button>
      <button onClick={() => console.log(Istate)}>Istate</button>
      <></>
    </>
  )
}


export default App
