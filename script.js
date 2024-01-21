var laberinto = [
    ['a','e','u','u','z','i','b'], 
    ['r','m','k','r','w','m','v'], 
    ['b','o','t','p','c','g','o'], 
    ['o','f','a','j','i','a','g'],
    ['l','g','e','x','e','l','g']];

// matriz.forEach(element => {
//     element.forEach(subelement => console.log(subelement));
// });

var izquierda = (array, y, x) => {                  // devuelve [contenido del index, index Y, index X] al que avance
    if (x > 0){
        return [array[y][x-1], y, x-1];
    }else{
        return [0,0,0]
    }
}
var derecha = (array, y, x) => {                    // devuelve [contenido del index, index Y, index X] al que avance   
    if (x < array.length-1){
        return [array[y][x+1], y, x+1];
    }else{
        return [0,0,0]
    }
    }
var arriba = (array, y, x) => {                     // devuelve [contenido del index, index Y, index X] al que avance
    if (y > 0){
        return [array[y-1][x], y-1, x]
    }else{
        return [0,0,0]
    }
}
var abajo = (array, y, x) => {                      // devuelve [contenido del index, index Y, index X] al que avance
    if (y < array.length-1){
        return [array[y+1][x], y+1, x]; //retornar [lo que contiene esa celda nueva, index Y, index X]
    }else{
        return [0,0,0]
    }
}
var arribaIzquierda = (array, y, x) => {            // devuelve [contenido del index, index Y, index X] al que avance
    if (y > 0 && x > 0 ){
        return [array[y-1][x-1], y-1, x-1];
    }else{
        return [0,0,0]
    }
}
var arribaDerecha = (array, y, x) => {              // devuelve [contenido del index, index Y, index X] al que avance
    if (y > 0 && x < array[y].length-1){
        return [array[y-1][x+1], y-1, x+1];
    }else{
        return [0,0,0]
    }
}
var abajoDerecha = (array, y, x) => {               // devuelve [contenido del index, index Y, index X] al que avance
    if (y < array.length-1 && x < array[y].length-1){
        return [array[y+1][x+1], y+1, x+1];
    }else{
        return [0,0,0]
    }
}
var abajoIzquierda = (array, y, x) => {             // devuelve [contenido del index, index Y, index X] al que avance
    if (y < array.length-1 && x > 0){
        return [array[y+1][x-1], y+1, x-1];
    }else{
        return [0,0,0]
    }
}

var direcciones = [0, 1, 2, 3, 4, 5, 6, 7]; // cada numero es el equivalente a una direccion que usaremos en la funcion "pasos"


var pasos = (matriz, y, x) => { //devuelve un paso valido al azar, en un array que contiene: [contenido del index, index Y, index X]
    var movimiento = 0;
    while(movimiento == 0){
        var indiceAleatorio = Math.floor(Math.random() * direcciones.length);
        var contenidoAleatorio = direcciones[indiceAleatorio];
        switch (contenidoAleatorio) {
            case 0: //ARRIBA
                datosFuncion = arriba(matriz,y,x);
                movimiento = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                if(movimiento != 0){                        //si el movimiento es valido:
                    console.log(`arriba ${movimiento}`);
                    return [movimiento, nuevoY, nuevoX];
                }else{
                    
                }
                break;
            case 1: //ABAJO
                datosFuncion = abajo(matriz,y,x);
                movimiento = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                if(movimiento != 0){                    //si el movimiento es valido:
                    console.log(`abajo ${movimiento}`);
                    return [movimiento, nuevoY, nuevoX];
                }else{}
                break;
            case 2: //IZQUIERDA
                datosFuncion = izquierda(matriz,y,x);
                movimiento = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index  // declaro la posicion en X del index
                if(movimiento != 0){                        //si el movimiento es valido:
                    console.log(`izquierda ${movimiento}`);
                    return [movimiento, nuevoY, nuevoX];
                }else{
                }
                break;
            case 3: //DERECHA
                datosFuncion = derecha(matriz,y,x);
                movimiento = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                if(movimiento != 0){                        //si el movimiento es valido:
                    console.log(`derecha ${movimiento}`);
                    return [movimiento, nuevoY, nuevoX];
                }else{
                }
                break;
            case 4: // ARRIBA IZQUIERDA
                datosFuncion = arribaIzquierda(matriz,y,x);
                movimiento = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                if(movimiento != 0){                        //si el movimiento es valido:
                    console.log(`arribaIzquierda ${movimiento}`);
                    return [movimiento, nuevoY, nuevoX];
                }else{
                }
                break;
            case 5: // ARRIBA DERECHA
                datosFuncion = arribaDerecha(matriz,y,x);
                movimiento = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                if(movimiento != 0){                        //si el movimiento es valido:
                    console.log(`arribaDerecha ${movimiento}`);
                    return [movimiento, nuevoY, nuevoX];
                }else{
                }
                break;
            case 6: //ABAJO IZQUIERDA
                datosFuncion = abajoIzquierda(matriz,y,x);
                movimiento = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                if(movimiento != 0){                        //si el movimiento es valido:
                    console.log(`abajoIzquierda ${movimiento}`);
                    return [movimiento, nuevoY, nuevoX];
                }else{
                }
                break;
            case 7: //ABAJO DERECHA
                datosFuncion = abajoDerecha(matriz,y,x);
                movimiento = datosFuncion[0];       // declaro el contenido del index dado
                nuevoY = datosFuncion[1];           // declaro la posicion en Y del index
                nuevoX = datosFuncion[2];           // declaro la posicion en X del index
                if(movimiento != 0){                        //si el movimiento es valido:
                    console.log(`abajoDerecha ${movimiento}`);
                    return [movimiento, nuevoY, nuevoX];
                }else{
                }
                break;
        }
    }
}
var pasosHechos = [laberinto[0][0]];   // contenido de los index en los que fui avanzando
var pasosY = [0];       //posicion en Y de los index
var pasosX = [0];       //posicion en X de los index

var ultimoY = pasosY[pasosY.length - 1]; //tomo el ultimo index en Y
var ultimoX = pasosX[pasosX.length - 1]; // tomo el ultimo index en X


while(pasosHechos.length < 5 ){                      //mientras los pasos hechos sean menores a 5
    pasosDatos = pasos(laberinto, ultimoY, ultimoX); // adquiero los datos de la funcion pasos en forma de array

    pasosHechos.push(pasosDatos[0]);                //push de los datos adquiridos
    pasosY.push(pasosDatos[1]);                     //push del index en Y adquiridos
    pasosX.push(pasosDatos[2]);                     //push del index en X adquiridos 

    ultimoY = pasosY[pasosY.length - 1];            //acutalizo index en Y
    ultimoX = pasosX[pasosX.length - 1];            //actualizo index en X

    console.log(pasosDatos);
    console.log(pasosHechos.length);


}
console.log(laberinto);
console.log(pasosHechos);


