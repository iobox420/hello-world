const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`Node hello world http://localhost:${port}`)
})

app.listen(port, () => {
    console.log(`Node hello world http://localhost:${port}`)
})