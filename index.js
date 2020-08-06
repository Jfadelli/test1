const express = require('express')

const server = express()

server.get('/', function (req, res) {
    res.status(200).json({message: 'hello'})
})

const PORT = process.env.PORT || 8000;
server.listen(PORT, () =>{
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`)
})