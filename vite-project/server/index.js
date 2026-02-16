import express from 'express'
import cors from 'cors'
import DATA from '../../DATA.js'
import mongoose from 'mongoose'
import { Stuff } from '../../Stuff.js'
const app = express()
const PORT = 3000

const connectDB = async() => {
  try{
    await mongoose.connect('mongodb+srv://warrendsteinacker_db_user:jQXpt3wf8I13h1Gp@cluster0.nzzo4zb.mongodb.net/')
    console.log('connected')
  }
  catch(error){
    console.error(error.message)
    console.log('not connected')
  }
}




connectDB()
// jQXpt3wf8I13h1Gp
app.use(cors())
app.use(express.json())

app.post('/posts', async (req, res) => {
  try{
    const {name, dep} = req.body

    await Stuff.create({name: name, dep: dep})

    console.log('good')

    res.status(200).send('all good')

  }
  catch(error){
    console.error(error.message)
    res.status(500).send('not good')
  }

})

app.post('/mposts', (req, res) => {
  const {name, age} = req.body

  const newD = {name, age}

  DATA.push(newD)

  res.json(DATA)}
)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})




// const obj = {
//   num1: 1,
//   num2: 2,
//   add: function() {
//     return () => {
//     console.log(this.num1 + this.num2)
//   }},
//   sub: function() {
//     return this.num1 - this.num2
//   }
//   }

//   const add = obj.add()
//   add()


// function timeopt() {
//   let a = []
//   for(let i= 0;  i<10000; ++i){
//     a[i] = i*i
//   }

//   return function(index){
//     console.log(a[index])
//   }
// }

// const time = timeopt()

// console.time()
// time(9999)
// console.timeEnd()



///////////////////////wernext connection testing


