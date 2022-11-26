const express = require('express')

const app = express()
const port = 3000;
const url = `http://localhost:${port}`

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Servidor Rodando')
})

app.listen(port, ()=> console.log(`Servidor rodando em: ${url}`));