const { Sequelize } = require('sequelize')
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = require('./env')

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect:'postgres',
    logging: false,
    pool:{
        max: 10,
        min : 0,
        idle: 10000
    }
}
)

module.exports = sequelize;