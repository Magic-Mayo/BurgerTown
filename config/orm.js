const connection = require('./connection');
  
  const orm = {
    all: function(tableInput, cb) {
      let queryString = `SELECT * FROM ${tableInput};`;
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, cols, vals, cb) {
      let queryString = `INSERT INTO ${table} (${cols.toString()}) values ("${vals}");`;
      // console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    update: function(table, id, cb) {
      let queryString = `UPDATE ${table} set devoured=true where id=${id}`;
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
  };
  
  module.exports = orm;  