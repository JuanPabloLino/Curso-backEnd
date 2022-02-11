const Contenedor = require('./clase');


const newContenedor= new Contenedor("./products.json")

const product1 = {
    "title":"MotorBike",
    "price":30000,
    "thumbnail":"url",
}

//  1
//     instancia.save(product1)
//  2
//     instancia.getById(1).then(obj => console.log(obj))
//  3
//     instancia.deleteById(3).then(arr => console.log("Se ha borrado el producto"))
//  4
//     instancia.getAll().then(arr => console.log(arr))
//  5 
//     instancia.deleteAll().then(arr => console.log("Se han borrado todos los productos"))




