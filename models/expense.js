const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Category = require('./category');

const Expense = sequelize.define('Expense', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id',
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

// Definir la relación
Expense.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = Expense;
