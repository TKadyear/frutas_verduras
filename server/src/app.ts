import express from 'express';
import cors from 'cors';
import { PORT } from './config';
import { Sequelize } from 'sequelize'; 
import conectionDB from './database/conectionDB';
import UsersModel from './models/usersModel';
import FrutasyverdurasModel from './models/frutasyverduras';

export const app = express();

app.use(cors());
app.use(express.json());

const iniciaDatabase = async (sequelize: Sequelize) => {
    try {
        await sequelize.authenticate();
        console.log('Conexión con la base de datos establecida.');

        await UsersModel.sync({force: true});
        console.log('Tablas creadas.');

        await FrutasyverdurasModel.sync({force: true});
        console.log('Tablas creadas.');

    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
}
iniciaDatabase(conectionDB);
// Iniciar servidor
export const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
