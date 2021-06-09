// FUNCIONES
//================

function saludar(){

    //llamando a funcion log
    console.log("Hola Mundo");

}

//llamando a la función
saludar();

function saludarPOrNombre(nombre){

    console.log("Hola ...."+ nombre);

}

saludarPOrNombre("Sergio P");

let amigo ="Miguel"
saludarPOrNombre("Mi amigo...."+ amigo);


function saludarElaborado(nombre, saludo="Hola"){

    console.log(saludo  + nombre);


}

saludarElaborado ("Sergio   "+ "buenos dias");

saludarElaborado("Dosil");


//funcion con argurmentos
function calcularCircunferencia(r){

// 2 * PI * r

const PI= 3.14;
return 2* PI * r;


}

//el parametro numerico puede ir con comillas, porque java lo 
//interpreta como numero
let circunferencia = calcularCircunferencia(10);

console.log(circunferencia);
