//import oracledb from 'oracledb';
const oracledb = require('oracledb');


export async function connectToDB() {
  try {
    await oracledb.createPool({
          user: 'system',
          password: 'oracle',
          connectString: 'localhost:1521/xe', 
          database: 'GITHUB'
      });

    console.log('Conexión exitosa a la base de datos Oracle.');
  } catch (error) {
    console.error('Error al conectar a la base de datos Oracle:', error);
  }
}

export async function closeDB() {
  try {
    await oracledb.getPool().close(10);
    console.log('Conexión cerrada con la base de datos Oracle.');
  } catch (error) {
    console.error('Error al cerrar la conexión con la base de datos Oracle:', error);
  }
}

export default oracledb;





/*const oracledb = require('oracledb');

const dbConfig = {
    user: 'system',
    password: 'oracle',
    connectString: 'localhost:1521/XEPDB1', // Cambia esto con los detalles de tu base de datos
    database: 'GITHUB',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

export class Database {
    static execute(query: string, binds: { correo: any; contrasena: any; }, options: { outFormat: any; }) {
        throw new Error('Method not implemented.');
    }
    static OUT_FORMAT_OBJECT: any;
    request() {
      throw new Error('Method not implemented.');
    }
    constructor() {
        this.connect();
    }
    async connect() {
        try {
            const connection = await oracledb.getConnection(dbConfig);
            console.log('Conexión exitosa a Oracle!');
            // Puedes realizar consultas o ejecutar otras operaciones aquí

            await connection.close();
        } catch (error) {
            console.error('Error al conectar a Oracle:', error);
        }
    }
}*/


/*const oracledb = require('oracledb');

export class Database{
    constructor(){
    this.conectar();
    }
    conectar(){

        const db = async () => {
            try {
                await oracledb.createPool({
                    user: 'system',
                    password: 'oracle',
                    connectString: 'localhost/1521', // Ejemplo: 'localhost/XEPDB1'
                });
                console.log('Conexión a Oracle exitosa');
            } catch (error) {
                console.error('Error al conectar a Oracle:', error);
            }

        }; 
    }
}

*/

/*import mongoose from "mongoose";

const bd:string = 'GitHub_Pruebas';
const port:string = '27017';
const host:string = '0.0.0.0';

export class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose
        .connect(`mongodb://${host}:${port}/${bd}`)
        .then(resut=>console.log('se conecto a mongoDB'))
        .catch(error=>console.log(error));
    }
}*/





