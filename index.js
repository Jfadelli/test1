require('dotenv').config()//if there is a .env on the rtoot folder it will merge it into process.env

const express = require('express')

const server = express()

server.get('/', function (req, res) {
    const message = process.env.MESSAGE || 'hello from code';

    res.status(200).json({message, database: process.env.DB_NAME})
})

const PORT = process.env.PORT || 8002;
server.listen(PORT, () =>{
    console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`)
})