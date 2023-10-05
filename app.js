let {CelciusFarenheit, kilogramosLibras, kilometrosMillas, piesPulgadas, pulgadasCentimetros} = require("./conversiones.js")
let fs = require("fs");

const resFarenheit = CelciusFarenheit(15)
console.log("Los grados a farenheit son: " + resFarenheit);

const resLibras = kilogramosLibras(15)
console.log("Los kilogramos a libras son: " + resLibras);

const resMillas = kilometrosMillas(55)
console.log("Los kilometros a millas son: " + resMillas);

const resPulgadas = piesPulgadas(25)
console.log("Los pies a pulgadas son: " + resPulgadas);

const resCm = pulgadasCentimetros(65)
console.log("Las Pulgadas a centimetros son: " + resCm);

fs.writeFile("./pruebaConversiones.txt",
`prueba funcion 
Los grados a farenheit son: ${resFarenheit}
Los kilogramos a libras son: ${resLibras}
Los kilometros a millas son:: ${resMillas}
Los pies a pulgadas son: ${resPulgadas}
Las Pulgadas a centimetros son: ${resCm}`,


function (error){
    if(error){
        console.log(error) 
    }else {
            console.log("Hola Mundo");
    }
})

