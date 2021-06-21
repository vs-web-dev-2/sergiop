//Las funciones flecha, tienen una sintaxis más corta
// que una función convencional.

////////////////////////////////////////////////////////////////////////
// CASO 1: FUNCIONES CON NOMBRE                                       //
////////////////////////////////////////////////////////////////////////


// 1.- cambiamos  palabra function por var, porque en las funciones con nombre
// se tratan las expresiones arrow como variables, usando la palabra let
// 2.-  luego del nombre de la funcion,  agregamos un signo igual
// 3.-  luego de los parametros agregamos la flecha                    
// 4.-  quitamos llaves y palabra return                               



function sumar(num1, num2) { return num1 + num2; }      //Funcion convencional

// let sumar = (num1, num2) => num1 + num2;              //La misma funcion, ahora como funcion arrow    
//sumar = (num1, num2) => num1 + num2                    //La misma funcion sin la palabra  "let"
//console.log("funcion sumar:  " + sumar(2, 3))


//(num1, num2) => num1 + num2   //La misma funcion, ahora sin nombre "sumar", es decir como funcion anonima
//console.log("funcion sumar:  " + (2, 3))


////////////////////////////////////////////////////////////////////////
// CASO 2: FUNCIONES SIN NOMBRE (ANONIMAS)                            //
////////////////////////////////////////////////////////////////////////


//function (a) { return a + 100; } //Funcion convencional

// (a) => { return a + 100; }   //ahora como function arrow, sin la palabra function
// (a) => a + 100;              //ahora sin corchetes y sin palabra return
// a => a + 100;                // ahora sin los parentesis (porque tiene un solo argumento)

// console.log("funcion anónima, sumando parametro a + 100:  " + 5)


// si  se tiene varios argumentos o ningún argumento,
// se debe volver a introducir paréntesis alrededor de los argumentos:


// function (a, b) { return a + b + 100; } // Función anomima tradicional, 

// (a, b) => a + b + 100;                  // Función flecha anomima

// Función tradicional  anomima, (sin argumentos)
// let a = 4;
// let b = 2;
// function () { return a + b + 100; }

// Función flecha  anomima (sin argumentos)
// let a = 4;
// let b = 2;
// () => a + b + 100;



// si el cuerpo requiere líneas de procesamiento adicionales,
// de debe poner corchetes y  el "return"

// Función tradicional
//function (a, b) {
//    let chuck = 42;
//    return a + b + chuck;
//}

// Función flecha
//(a, b) => {
//     let chuck = 42;
//     return a + b + chuck;
// }


// En las funciones con nombre,  tratamos las expresiones de flecha como variables utilizando let

// Función tradicional
//function sumar2(a) {
//    return a + 100;
//}

// Función flecha
//let sumar2 = a => a + 100;
//console.log("Funcion sumar2: ...." + sumar2(10))

// la misma funcion sin la palabra let
// sumar2 = a => a + 100;
// console.log("Funcion sumar2: ...." + sumar2(10))

// la misma funcion sin la palabra let y sin nombre de la function (es decir anónima)
// a => a + 100;
// console.log("Funcion sumar2: ...." + 10)