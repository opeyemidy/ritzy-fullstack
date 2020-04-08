const express = require('express')
const router = express.Router()
const db = require('../models')

router.post('/new', (req, res) => {
  db.Category.create({
    name: req.body.name,
    link: req.body.link,
  }).then((newCategory) => res.send(newCategory))
})
router.get('/all', (req, res) => {
  db.Category.findAll({
    // include: [db.Product],
  }).then((allCategories) => res.send(allCategories))
})

module.exports = router
