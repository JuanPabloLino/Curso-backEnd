const express = require('express');
const fs = require('fs')

const Contenedor = require('./class.js');
const newContenedor = new Contenedor('./products.json');

const server = express();
const PORT = 8080

server.get("/products", async (req, res) => {
  const data = await newContenedor.getAll()
  res.send(data)
})

server.get('/RandomProduct', async (req, res) =>{
  const products = await newContenedor.getAll()
  let RandomNumber = Math.round(Math.random() * products.length)
  res.send(products[RandomNumber])
})

server.listen(PORT, () =>{
  console.log(`http//localhost: ${PORT}`)
})

server.on('error', e => console.log('Error en servidor: ', e))
