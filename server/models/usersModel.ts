import {  DataTypes, Model } from "sequelize";
import conectionDB from "../database/conectionDB";
import { UserInterface } from "../interfaces/userInterface";

interface UserModel extends Model<UserInterface>, UserInterface {}

const UsersModel = conectionDB.define<UserModel>('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default UsersModel;