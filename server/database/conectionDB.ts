import { Sequelize } from 'sequelize';
import { DB_PASSWORD, DB_HOST, DB_USER, DB_PORT, DB_DEV_NAME, DB_TEST_NAME, NODE_ENV } from '../config';
const DB_NAME = NODE_ENV === 'test' ? DB_TEST_NAME : DB_DEV_NAME;

const conectionDB = new Sequelize (DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    port: Number (DB_PORT),
    define: {
        timestamps: false
    }
})

export default conectionDB;