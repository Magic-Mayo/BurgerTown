const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "us-cdbr-iron-east-02.cleardb.net",
    port: 3306,
    user: "b69263168a2449",
    password: "2c09d461",
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