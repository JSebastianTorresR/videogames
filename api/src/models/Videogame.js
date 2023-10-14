const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUIDV4,
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
    launchDate: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    }
  },{
    timestamps: false,
    initialAutoIncrement: 2000,
  });
};