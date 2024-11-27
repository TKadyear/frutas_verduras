import {  DataTypes, Model } from "sequelize";
import conectionDB from "../database/conectionDB";
import { FrutasyverdurasInterface } from "../interfaces/frutasyverdurasinterface";

interface FrutasyverdurasModel extends Model<FrutasyverdurasInterface>, FrutasyverdurasInterface {}

const FrutasyverdurasModel = conectionDB.define<FrutasyverdurasModel>('frutasyverduras', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    mes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    frutas_op: {
        type: DataTypes.STRING,
        allowNull: false
    },
    verduras_op: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default FrutasyverdurasModel;