const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// Bread Routes
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread
      }
    )
  // res.send(Bread)
})


// Show breads
breads.get('/:arrayIndex', (req, res) => {
    res.render('Show', {
      bread: Bread[req.params.arrayIndex]
    })
  })
  
module.exports = breads