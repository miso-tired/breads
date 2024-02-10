const express = require('express')
const app = express()
const methodOverride = require('method-override')


// Config
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)


// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))


// Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})


// Breads Routes
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 page
app.get('*', (req, res) => {
    res.send('404')
})

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`)
})