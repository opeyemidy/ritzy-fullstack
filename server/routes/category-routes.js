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
  db.Category.findAll({}).then((allCategories) => res.send(allCategories))
})

router.get('/find/:id', (req, res) => {
  db.Category.findAll({
    where: { id: req.params.id },
    include: [db.Product],
  }).then((oneCategory) => {
    oneCategory[0].Products.forEach((item) => {
      let imageArray = item.images.split(',')
      item.images = imageArray
    })
    res.send(oneCategory)
  })
})

module.exports = router
