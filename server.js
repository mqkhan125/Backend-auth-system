const express = require("express");
const pool = require('./config/db')
const cors = require("cors")
const authRouter = require('./Router/authRouter')


const app = express()
app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)




app.listen(process.env.PORT || 3000, () => {
    console.log('server are started...')
})