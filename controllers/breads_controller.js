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


// New Route
breads.get('/new', (req ,res) => {
  res.send(render('New'))
})

// Detail Route
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    })
  } else {
    res.render('404').send('404. Bread not found.')
  }
})

// Delete Route
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})

// Create Route
breads.post('/', (req, res) => {
  if (req.body.hasGluten === 'on') {
      req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.push(req.body);
  res.redirect('/breads');
})

// Show breads
breads.get('/:arrayIndex', (req, res) => {
    res.render('Show', {
      bread: Bread[req.params.arrayIndex]
    })
  })
  
module.exports = breads