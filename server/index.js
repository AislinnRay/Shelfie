require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()

//Controllers
//const productCtrl = require('./controllers/controller')

//Middleware
app.use(express.json())

//Database Connection
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
})
    .then(db => {
        app.set('db', db)
        console.log('Database Connected')
        app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
    }).catch(err => console.log(err))

    //Endpoints