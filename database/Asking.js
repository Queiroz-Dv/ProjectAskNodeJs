const Sequelize = require("sequelize");
const connection = require("./database");

//Create Table
const Ask = connection.define('ask', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});
//Create table in database
Ask.sync({ force: false }).then(() => { });
module.exports = Ask;