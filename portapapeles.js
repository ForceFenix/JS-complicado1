// var posiblesPalabras = ["gato", "perro", "arbol", "murcielago", "lata", "papel", "bicicleta"];

// var pasosHechos = ["p","e","r"];

// // verificar si alguna palabra de posiblesPalabras, comienza con los pasosHechos

// var verificador = posiblesPalabras.some(element => {
//     let letras = element.split("");
//     for (let i = 0; i < pasosHechos.length; i++){
//         if(letras[i] != pasosHechos[i]){
//             return false;
//         }
//     }
//     return true;
    
// }); 

// console.log(verificador)


var direcciones = [0, 1, 2, 3, 4, "este", 6, 7];

var borrar = direcciones.splice(direcciones.indexOf("este"), 1);

console.log(direcciones);