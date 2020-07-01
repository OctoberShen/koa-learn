const Sequelize = require('sequelize');
const {
  dbName,
  user,
  password,
  host,
  port
} = require('../../config/config').database;
const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  port,
  host,
  logging: true, // 在命令行显示sql语句
  timezone: '+08:00',
  define: {

  }
})

module.exports = {
  sequelize
}
