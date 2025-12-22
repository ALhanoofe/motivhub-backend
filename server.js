require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const AuthRouter = require('./routes/AuthRouter')
const PostRouter = require('./routes/PostRouter')

const db = require('./db')

const PORT = process.env.PORT || 3000

const app = express()


app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/auth', AuthRouter)
app.use('/api/posts', PostRouter)


app.get('/', (req, res) => {
  res.send('MotivHub API is running')
})


app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
