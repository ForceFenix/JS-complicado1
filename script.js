var laberinto = [
    ['a', 'e', 'u', 'u', 'z', 'i', 'b'],
    ['r', 'm', 'k', 'r', 'w', 'm', 'v'],
    ['b', 'o', 't', 'p', 'c', 'g', 'o'],
    ['o', 'f', 'a', 'j', 'i', 'a', 'g'],
    ['l', 'g', 'e', 'x', 'e', 'l', 'q']];

var posiblesPalabras = ["gato", "perro", "arbol", "murcielago", "lata", "papel", "bicicleta"];

// matriz.forEach(element => {
//     element.forEach(subelement => console.log(subelement));
// });

var izquierda = (array, y, x) => {                  // devuelve [contenido del index, index Y, index X] al que avance
    if (x > 0) {
        return [array[y][x - 1], y, x - 1];
    } else {
        return [0, 0, 0]
    }
}
var derecha = (array, y, x) => {     
    console.log(`---------------- eje y: ${y}\n eje x: ${x}\n array.length-1 = ${array.length-1}\n array[y].length-1 = ${array[y].length-1}`);               // devuelve [contenido del index, index Y, index X] al que avance   
    if (x < array[y].length - 1) {
        return [array[y][x + 1], y, x + 1];
    } else {
        return [0, 0, 0]
    }
}
var arriba = (array, y, x) => {                     // devuelve [contenido del index, index Y, index X] al que avance
    if (y > 0) {
        return [array[y - 1][x], y - 1, x]
    } else {
        return [0, 0, 0]
    }
}
var abajo = (array, y, x) => {                      // devuelve [contenido del index, index Y, index X] al que avance
    if (y < array.length - 1) {
        return [array[y + 1][x], y + 1, x]; //retornar [lo que contiene esa celda nueva, index Y, index X]
    } else {
        return [0, 0, 0]
    }
}
var arribaIzquierda = (array, y, x) => {            // devuelve [contenido del index, index Y, index X] al que avance
    if (y > 0 && x > 0) {
        return [array[y - 1][x - 1], y - 1, x - 1];
    } else {
        return [0, 0, 0]
    }
}
var arribaDerecha = (array, y, x) => {              // devuelve [contenido del index, index Y, index X] al que avance
    if (y > 0 && x < array[y].length - 1) {
        return [array[y - 1][x + 1], y - 1, x + 1];
    } else {
        return [0, 0, 0]
    }
}
var abajoDerecha = (array, y, x) => {               // devuelve [contenido del index, index Y, index X] al que avance
    if (y < array.length - 1 && x < array[y].length - 1) {
        return [array[y + 1][x + 1], y + 1, x + 1];
    } else {
        return [0, 0, 0]
    }
}
var abajoIzquierda = (array, y, x) => {             // devuelve [contenido del index, index Y, index X] al que avance
    if (y < array.length - 1 && x > 0) {
        return [array[y + 1][x - 1], y + 1, x - 1];
    } else {
        return [0, 0, 0]
    }
}



var pasos = (matriz, y, x) => { //devuelve un paso valido al azar, en un array que contiene: [contenido del index, index Y, index X]
    if (direcciones.length == 0) {
        return false;
    }
    var contenido = 0;
    while (contenido == 0) {
        var indiceAleatorio = Math.floor(Math.random() * direcciones.length);
        var contenidoAleatorio = direcciones[indiceAleatorio];
        switch (contenidoAleatorio) {
            case 0: //ARRIBA
                datosFuncion = arriba(matriz, y, x);
                contenido = datosFuncion[0];        // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                movimiento = 0;                     // direccion del movimiento 
                if (contenido != 0) {               //si el contenido es valido:
                    console.log(`arriba ${contenido}`);
                    return [contenido, nuevoY, nuevoX, movimiento];
                } else {
                    direcciones.splice(direcciones.indexOf(0), 1);
                    console.log(`direcciones restantes en switch: ${direcciones}`);
                }
                break;
            case 1: //ABAJO
                datosFuncion = abajo(matriz, y, x);
                contenido = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                movimiento = 1;                     // direccion del movimiento 
                if (contenido != 0) {                    //si el contenido es valido:
                    console.log(`abajo ${contenido}`);
                    return [contenido, nuevoY, nuevoX, movimiento];
                } else {
                    direcciones.splice(direcciones.indexOf(1), 1);
                    console.log(`direcciones restantes en switch: ${direcciones}`);
                }
                break;
            case 2: //IZQUIERDA
                datosFuncion = izquierda(matriz, y, x);
                contenido = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                movimiento = 2;                     // direccion del movimiento 
                if (contenido != 0) {                        //si el contenido es valido:
                    console.log(`izquierda ${contenido}`);
                    return [contenido, nuevoY, nuevoX, movimiento];
                } else {
                    direcciones.splice(direcciones.indexOf(2), 1);
                    console.log(`direcciones restantes en switch: ${direcciones}`);
                }
                break;
            case 3: //DERECHA
                datosFuncion = derecha(matriz, y, x);
                contenido = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                movimiento = 3;                     // direccion del movimiento 
                console.log(datosFuncion)
                if (contenido != 0) {                        //si el contenido es valido:
                    console.log(`derecha ${contenido}`);
                    return [contenido, nuevoY, nuevoX, movimiento];
                } else {
                    direcciones.splice(direcciones.indexOf(3), 1);
                    console.log(`direcciones restantes en switch: ${direcciones}`);
                }
                break;
            case 4: // ARRIBA IZQUIERDA
                datosFuncion = arribaIzquierda(matriz, y, x);
                contenido = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                movimiento = 4;                     // direccion del movimiento 
                if (contenido != 0) {                        //si el contenido es valido:
                    console.log(`arribaIzquierda ${contenido}`);
                    return [contenido, nuevoY, nuevoX, movimiento];
                } else {
                    direcciones.splice(direcciones.indexOf(4), 1);
                    console.log(`direcciones restantes en switch: ${direcciones}`);
                }
                break;
            case 5: // ARRIBA DERECHA
                datosFuncion = arribaDerecha(matriz, y, x);
                contenido = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                movimiento = 5;                     // direccion del movimiento 
                if (contenido != 0) {                        //si el contenido es valido:
                    console.log(`arribaDerecha ${contenido}`);
                    return [contenido, nuevoY, nuevoX, movimiento];
                } else {
                    direcciones.splice(direcciones.indexOf(5), 1);
                    console.log(`direcciones restantes en switch: ${direcciones}`);
                }
                break;
            case 6: //ABAJO IZQUIERDA
                datosFuncion = abajoIzquierda(matriz, y, x);
                contenido = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                movimiento = 6;                     // direccion del movimiento 
                if (contenido != 0) {                        //si el contenido es valido:
                    console.log(`abajoIzquierda ${contenido}`);
                    return [contenido, nuevoY, nuevoX, movimiento];
                } else {
                    direcciones.splice(direcciones.indexOf(6), 1);
                    console.log(`direcciones restantes en switch: ${direcciones}`);
                }
                break;
            case 7: //ABAJO DERECHA
                datosFuncion = abajoDerecha(matriz, y, x);
                contenido = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                movimiento = 7;                     // direccion del movimiento 
                if (contenido != 0) {                        //si el contenido es valido:
                    console.log(`abajoDerecha ${contenido}`);
                    return [contenido, nuevoY, nuevoX, movimiento];
                } else {
                    direcciones.splice(direcciones.indexOf(7), 1);
                    console.log(`direcciones restantes en switch: ${direcciones}`);
                }
                break;
        }
    }
}
var opuestos = a => {
    switch (a) {
        case 0:
            return 1;
        case 1:
            return 0;
        case 2:
            return 3;
        case 3:
            return 2;
        case 4:
            return 7;
        case 5:
            return 6;
        case 6:
            return 5;
        case 7:
            return 4;
    }
}

var pasosHechos = [laberinto[0][0]];   // contenido de los index en los que fui avanzando

var pasosY = [0];       //posicion en Y de los index

var pasosX = [0];       //posicion en X de los index

var ultimoY = pasosY[pasosY.length - 1]; //tomo el ultimo index en Y

var ultimoX = pasosX[pasosX.length - 1]; // tomo el ultimo index en X

var palabrasEncontradas = [];

var direcciones = [0, 1, 2, 3, 4, 5, 6, 7]; // cada numero es el equivalente a una direccion que usaremos en la funcion "pasos"

while (direcciones.length != 0) {                     //mientras los pasos hechos sean menores a 5

    var pasosDatos = pasos(laberinto, ultimoY, ultimoX);                        // adquiero los datos de la funcion pasos en forma de array
    var pasosPreliminar = [...pasosHechos, ...pasosDatos[0]];                   //armo una lista de las letras agregando el ultimo paso de forma preliminar
    let verificador = posiblesPalabras.some(element => {                        //si va formando una palabra valida, devuelve true, de lo contrario false
        let letras = element.split("");
        for (let i = 0; i < pasosPreliminar.length; i++) {
            if (letras[i] != pasosPreliminar[i]) {
                return false;
            }
        }
        return true;

    })

    if (verificador == true) {
        direcciones = [0, 1, 2, 3, 4, 5, 6, 7];
        direcciones.splice(direcciones.indexOf(opuestos(pasosDatos[3])), 1); //elimino la direccion de donde proviene, asi no puede volver
        pasosHechos.push(pasosDatos[0]);                //push de los datos adquiridos
        pasosY.push(pasosDatos[1]);                     //push del index en Y adquiridos
        pasosX.push(pasosDatos[2]);                     //push del index en X adquiridos 

        ultimoY = pasosY[pasosY.length - 1];            //acutalizo index en Y
        ultimoX = pasosX[pasosX.length - 1];            //actualizo index en X
    } else {
        direcciones.splice(direcciones.indexOf(pasosDatos[3]), 1); //elimino la direccion de donde proviene, asi no puede volver
        console.log(`direcciones restantes: ${direcciones}`);
    }

    //evaluo si las letras que voy encontrando, formaron una palabra: 
    var palabraFormandose = pasosHechos.join("");
    if (posiblesPalabras.includes(palabraFormandose)) {
        palabrasEncontradas.push(palabraFormandose);
        pasosHechos = [];
    }
    console.log(`Ha formado las siguientes palabras: ${palabrasEncontradas}`);
    console.log(`vas juntando las siguientes letras: ${pasosHechos}`);
    console.log(`aca termina una vuelta del while \n ${direcciones.length}`);
    if(direcciones.length == 0){
        break;
    }

}


