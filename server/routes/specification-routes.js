const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/new', (req, res) => {
  db.Specification.create({
    heading: req.body.heading,
    list: req.body.list,
    ProductId: req.body.product_id,
  }).then((newSpecification) => res.send(newSpecification));
});
router.get('/all', (req, res) => {
  db.Specification.findAll({
    include: [db.Specification],
  }).then((allSpecifications) => res.send(allSpecifications));
});

module.exports = router;
