import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const PostPage = () => {

    const nav = useNavigate()
    const [dep, setD] = useState('')
    const [name, setN] = useState('')


    const Mpost = async(e) => {
        e.preventDefault()
        try{
            const sent = await fetch('http://localhost:3000/posts', {method: 'POST', headers: {'Content-type':'application/json'}, body: JSON.stringify({dep: dep, name: name})})
            
            if(sent.ok)
                {
                
                console.log('SENT')
                nav('/')
                
                }
        }
        catch(error){
            console.error(error.message)
            console.log('post error')
        }
    }

  return (
    <>
    <form onSubmit={Mpost}>
        <input type='text' placeholder='Make Post Name' value={name} onChange={(e) => setN(e.target.value)}></input>
        <input type='text' placeholder='Make Post Depscription' value={dep} onChange={(e) => setD(e.target.value)}></input>
        <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default PostPage