module.exports = (sequelize, DataTypes) => {
  const Specification = sequelize.define(
    'Specification',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      heading: {
        type: DataTypes.STRING,
      },
      list: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    }
  );
  Specification.associate = (models) => {
    Specification.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Specification;
};
