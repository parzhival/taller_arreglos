let arregloIzquierda = [12,15]; 
const arregloDerecha = [20,25];

function agregarEdad(){
    let edad = document.getElementById("edad");
    let edadValue = edad.value;
    let valorEdad = parseInt(edadValue);
    arregloIzquierda.push(valorEdad);
    mostrarPantalla(); 
}
 function mostrarPantalla(){
    let ctxIzquierdo = document.getElementById("tablaIzquierda");
    ctxIzquierdo.innerHTML = "";
    for(let i = 0; i < arregloIzquierda.length; i++){
        ctxIzquierdo.innerHTML += "<tr><td>"+
        arregloIzquierda[i] 
        +"</td><td><button class='btn-eliminar' type='button' onclick='eliminarIzquierda(" + i + ");'>Eliminar</button></td><td><button class='btn-mover' onclick='moverDerecha(" + i + ")'>➜</button></td></tr>"
    }
    let suma = sumarEdadesIzquierda();
    ctxIzquierdo.innerHTML += "<tr><td>" +
                                suma + "</td>" + "<td>" + "Total suma" + "</td>" + "<td>" + "" + "</td>" + "</tr>";
}

function eliminarIzquierda(indice){   
    arregloIzquierda.splice(indice, 1);
    mostrarPantalla();
}

function mostrarDerecha(){
    let ctxDerecho = document.getElementById("tablaDerecha");
    ctxDerecho.innerHTML = "";
    for (let i = 0; i <arregloDerecha.length; i++){
        ctxDerecho.innerHTML += "<tr><td><button class='btn-mover' onclick='moverIzquierda(" + i + ")'>⬅</button></td><td>" + arregloDerecha[i] + "</td><td><button class='btn-eliminar' onclick='eliminarDerecha(" + i + ")'>Eliminar</button></td></tr>";
                           
    }
}
function eliminarDerecha(indice){
    arregloDerecha.splice(indice, 1);
    mostrarDerecha();
}

function moverDerecha(indice){
    let valorIzquierda = arregloIzquierda[indice]
    arregloDerecha.push(valorIzquierda);
    eliminarIzquierda(indice);
    mostrarDerecha()
}

function moverIzquierda(indice){
    let valorDerecha = arregloDerecha[indice]
    arregloIzquierda.push(valorDerecha);
    eliminarDerecha(indice);
    mostrarPantalla()
}

function limpiarTablas(){
    arregloDerecha.splice(0);
    //no reasigna solo modifica el contenido
    arregloIzquierda = [];
    // no funciona con const
    mostrarPantalla();
    mostrarDerecha();
}

function moverTodoDerecha(){
    for( let indice = 0; indice < arregloIzquierda.length; indice++){
        let valor = arregloIzquierda[indice];
        arregloDerecha.push(valor);        
    }
    arregloIzquierda.splice(0);
    mostrarPantalla();
    mostrarDerecha();
}

function moverTodoIzquierda(){
    for(let indice = 0; indice < arregloDerecha.length; indice++){
        let valor = arregloDerecha[indice];
        arregloIzquierda.push(valor);
    }
    arregloDerecha.splice(0);
    mostrarPantalla();
    mostrarDerecha();
}

function sumarEdadesIzquierda(){
    let suma = 0;
    for( let i = 0; i < arregloIzquierda.length; i++){
        suma += arregloIzquierda[i];
    }
    return suma; 
}