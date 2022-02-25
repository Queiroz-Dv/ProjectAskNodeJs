const Sequelize = require("sequelize");
const connection = require("./database");

const Answer = connection.define("answer", {
  //This is a relationship between Ask and Answer tables
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  askId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
Answer.sync({ force: false }).then(() => { });
module.exports = Answer;