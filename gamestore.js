//array con los productos (juegos) , el costo y el stock de cada uno
const stockDetails = [
    { nombre: "Resident Evil 8 DLC Shadows Of Rose (RE 8)", precio: 1215, stock: 120},
    { nombre: "Resident Evil 8 (RE 8)", precio: 1700, stock: 90},
    { nombre: "Resident Evil 7 biohazard (RE 7)", precio: 648, stock: 45},
    { nombre: "Resident Evil 6 (RE 6)", precio: 605, stock: 25},
    { nombre: "Resident Evil 5 (RE 5)", precio: 405, stock: 10},
    { nombre: "Resident Evil 4 (RE 4)", precio: 56.24, stock: 100},
    { nombre: "Resident Evil 4 Remake (RE 4)", precio: 13000, stock: 0},
    { nombre: "Resident Evil 3 Remake (RE 3)", precio: 850, stock: 10},
    { nombre: "Resident Evil 2 Remake (RE 2)", precio: 850, stock: 0},
    { nombre: "Outlast", precio: 1400, stock: 1},
    { nombre: "Outlast DLC Whistleblower", precio: 700, stock: 1},
    { nombre: "Outlast 2", precio: 2100, stock: 0},
    { nombre: "Dead Space", precio: 7999, stock: 5},
    { nombre: "The Evil Within", precio: 315, stock: 0},
    { nombre: "The Evil Within 2", precio: 624.99, stock: 2},
    { nombre: "Silent hill 2", precio: 954.99, stock: 0},
    { nombre: "Silent hill 3", precio: 1024, stock: 0},
    { nombre: "The Forest", precio: 224.99, stock: 24},
    { nombre: "Sons Of The Forest", precio: 2100, stock: 32},
    { nombre: "Dark Souls 3", precio: 8599, stock: 7},
    { nombre: "Dying Light", precio: 125.99, stock: 89},
    { nombre: "Dying Light 2 Staying Human", precio: 1499.50, stock: 60},
    { nombre: "Five Nights at Freddys (FNAF) ", precio: 67.99, stock: 58},
    { nombre: "Five Nights at Freddys Security Breach (FNAF) ", precio: 439.99, stock: 68},
    { nombre: "Dead By Daylight (DBD)", precio: 645, stock: 41},
    { nombre: "The Last Of Us (TLOU)", precio: 7999, stock: 0},
]

//calcular precio final de cada uno : 74% (45% ganancias, 8% pais y 21% iva servicios digitales)



//buscar/filtrar juegos con stock

const searchStock = stockDetails.filter((el) => el.stock > 0 )
console.log(searchStock)

//buscar productos por nombre

const buscarXnombre = stockDetails.filter((el) => el.nombre.includes("FNAF"))
console.log(buscarXnombre)

//buscar por precio (en este ejemplo los que cuesten menos de 1000)

const sortByprice = stockDetails.filter(nombre => nombre.precio < 1000)
console.log(sortByprice)

