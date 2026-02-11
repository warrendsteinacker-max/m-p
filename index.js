import express from 'express'
import cors from 'cors'
import DATA from './DATA.js'

const app = express()
const PORT = 3000


app.use(cors())
app.use(express.json())

app.get('/posts', (req, res) => {
  res.json(DATA)
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