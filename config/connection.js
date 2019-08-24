const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "1fafp404",
        database: "Burger_Town"
    })
}

connection.connect((err)=>{
    if(err) {
        console.error(`Error: ${err.stack}`);
        return
    };
    console.log(`Connected as ID ${connection.threadId}`)
})

module.exports = connection;