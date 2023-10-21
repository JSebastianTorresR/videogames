const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      unique: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    released: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      unique: false
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      unique: false
    }
  },{
    timestamps: false
  });
};