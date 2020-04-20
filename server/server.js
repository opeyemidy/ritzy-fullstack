const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./models')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const categoryRoutes = require('./routes/category-routes')
app.use('/api/category', categoryRoutes)

const productRoutes = require('./routes/product-routes')
app.use('/api/product', productRoutes)

const specificationRoutes = require('./routes/specification-routes')
app.use('/api/specification', specificationRoutes)
// Handle production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'))
  //Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const PORT = process.env.PORT || 3000

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening at: http://localhost:${PORT}`)
  })
})
