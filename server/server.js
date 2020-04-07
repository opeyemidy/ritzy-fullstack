const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const categoryRoutes = require('./routes/category-routes');
app.use('/api/category', categoryRoutes);

const productRoutes = require('./routes/product-routes');
app.use('/api/product', productRoutes);

const specificationRoutes = require('./routes/specification-routes');
app.use('/api/specification', specificationRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening at: http://localhost:${PORT}`);
  });
});
