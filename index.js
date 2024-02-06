const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`)
})