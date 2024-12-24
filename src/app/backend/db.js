let mysql = require('mysql2')

let conexion = mysql.createConnection({
    host: "localhost",
    database: "HealthFocus",
    user: "root",
    password: "Carlosadrian22"
})

conexion.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Conexión exitosa")
    }
})