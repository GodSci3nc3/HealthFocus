//Importar el módulo de mysql
import mysql from 'mysql2';

//Importamos el modulo para soportar promesas
import {promisify} from 'util';

//Importar la configuración de la base de datos desde el archivo keys.js
import { database } from './keys.mjs';

//Creación de conexión con Pool, para que se puedan hacer múltiples consultas
const pool = mysql.createPool(database);

//Hacer la conexión y verificar si hay errores
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La conexión con la base de datos fue cerrada');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene muchas conexiones');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('La conexión fue rechazada');
        }
    }
    //Si no hay errores, se muestra el mensaje de conexión exitosa
    if (connection) connection.release();
    console.log('La base de datos está conectada');
    return;
});

//Exportar la conexión para poder usarla en otros archivos
export default pool;
