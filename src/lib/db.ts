'use server'
import mysql, { Connection } from "mysql";

const host = process.env.MYSQL_HOST;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const port = 3306;
const database = process.env.DB_NAME;

export async function connection() {
  const connection =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pacopaco1234",
    database: "doc_tracker",
  })
  
  connection.connect((err)=> {
    console.log(err)
  })
  return connection
}




export default connection
