// import express from 'express'
// import cors from 'cors'
// import DATA from './DATA.js'

// const app = express()
// const PORT = 3000


// app.use(cors())
// app.use(express.json())

// app.get('/posts', (req, res) => {
//   res.json(DATA)
// })

// app.post('/mposts', (req, res) => {
//   const {name, age} = req.body

//   const newD = {name, age}

//   DATA.push(newD)

//   res.json(DATA)}
// )

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })




const obj = {
  num1: 1,
  num2: 2,
  add: function() {
    this.num1 = this.num1
    this.num2 = this.num2 
    return () => {
    console.log(this.num1 + this.num2)
  }},
  sub: function() {
    return this.num1 - this.num2
  }
  }

  console.log(obj.add())