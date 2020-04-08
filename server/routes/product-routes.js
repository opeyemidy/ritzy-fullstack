const express = require('express')
const router = express.Router()
const db = require('../models')

router.post('/new', (req, res) => {
  db.Product.create({
    name: req.body.name,
    price: req.body.price,
    size: req.body.size,
    details: req.body.details,
    images: req.body.images,
    CategoryId: req.body.catid,
  }).then((newProduct) => res.send(newProduct))
})
router.get('/all', (req, res) => {
  db.Product.findAll({
    include: [db.Specification],
  }).then((allProducts) => {
    allProducts.forEach((product) => {
      if (product.size) {
        let sizeArray = product.size.split(',')
        product.size = sizeArray
      }
      let imageArray = product.images.split(',')
      product.images = imageArray
      product.Specifications.forEach((item) => {
        let listArray = item.list.split(',')
        item.list = listArray
      })
    })
    res.send(allProducts)
  })
})

module.exports = router
