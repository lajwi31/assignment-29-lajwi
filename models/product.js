'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    kode_product: DataTypes.STRING,
    nama_product: DataTypes.STRING,
    stok: DataTypes.INTEGER,
    kategori_product: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};