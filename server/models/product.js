module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      size: {
        type: DataTypes.TEXT,
      },
      details: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      images: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )
  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false,
      },
    })
    Product.hasMany(models.Specification, {
      onDelete: 'cascade',
    })
  }
  return Product
}
