import mysql from 'mysql2';
import { createLog } from '../services/logging/logging';
import { DB_SERVER, DB_NAME, DB_PASSWORD, DB_USER } from '../constants/data';
import Pool from 'mysql2/typings/mysql/lib/Pool';

const createPool = ():Pool => {
    const pool = mysql.createPool({
        connectionLimit: 20,
        host: DB_SERVER,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME
    })
    return pool;
}

export const runQuery = async(query:string) => {
    const pool:Pool = createPool();
    return new Promise((resolve, reject) => {
        pool.query(query, (err, rows, fields) => {
            if(err) reject(() => {
                createLog(500, err.message);
                pool.end();
            });
            resolve({ rows, fields });
            pool.end();
        })
    });
}