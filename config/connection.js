const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1fafp404",
    database: "Burger_Town"
})

connection.connect((err)=>{
    if(err) {
        console.error(`Error: ${err.stack}`);
        return
    };
    console.log(`Connected as ID ${connection.threadId}`)
})

module.exports = connection;