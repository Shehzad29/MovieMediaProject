//For maintaining connections
const mysql = require('mysql');
const http= require('https')
const dbConnection = mysql.createConnection({
    host: "db4free.net",
    database: "movies_app_db",
    user: "tmdb_user",
    password: "midb@1234"
  });

dbConnection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });

  

module.exports = async function executeQuery(query){
  
  var myPromise = () => {
    return new Promise((resolve, reject) => {
        dbConnection.query(query, function (err, result) {
          if (err) {
            console.log(err.toString());
            reject(err)
          } else {
            console.log("user created")
            resolve(result) 
            
          }})
        }) 
    }
    let result = await(myPromise())
    return result
}
module.exports= dbConnection
