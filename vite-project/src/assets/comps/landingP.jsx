
import { useEffect, useState} from "react"
import {Link} from 'react-router-dom'

const LandingP = () => {

    const [D, setD] = useState([])

    useEffect(() => {
        const getS = async () => {
        try{
            const res = await fetch('http://localhost:3000')
            const data = await res.json()
            setD(data)
        }
        catch(error){
            console.error(error.message + ' ' + 'could not get')
        }}
        getS()
    }, [])

  return (
    <>
        <Link to='/addp'>make post</Link>
        <h>posts below</h>
        {D.map((item) => <div style={{color: 'black'}} key={item.name}><div><p>{item.dep}</p></div><div></div></div>)}
    </>
    
  )
}

export default LandingP