import express from 'express'
import cors from 'cors'
import DATA from './DATA.js'

const app = express()
const PORT = 3000


app.use(cors())
app.use(express.json())

app.get('/posts', (req, res) => {

})