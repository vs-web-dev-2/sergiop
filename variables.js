//variables primitivas
const PI = 3.14;
let marca = "bh";
let radio = 30;
let rueda = 2 * PI * radio;
let esDeCarretera = true;
marca = "orbea";
radio = 400;
//let marca ="orbea";
//PI=9;
console.log("Marca : " + marca);
console.log("Longitud Rueda: "+rueda);
console.log(radio);
console.log(esDeCarretera);
//tipos compuestos: objetos, que aqui serán jason
// se declaran entre {}, asignacion con dos puntos

let bici = {
    marca : "bh",
    precio : 300,
    rueda: 30,
    esDeCarretera: true,
    color: "rojo"
}

bici.color= "azul";//puedo reasignar valores al objeto
bici.precio=500;
console.log(bici);
console.log(bici.precio);
console.log(bici.color);


//TIPO DE DATO ARRAY

let colores = ["rojo","azul","blanco"];

console.log(colores);
console.log(colores[1]);//imrprimirá azul.. array comienza desde cero
colores[2]="negro"; //reasignando valor a posicion 2
console.log(colores);

bici.marca=marca;//reasignando valor a partir de valor de otra variable
console.log(bici);
marca="specialized";
console.log(bici.marca);
console.log(marca);

console.color=colores[0];

//tipos booleanos
let esGrande=bici.radio < 25;
let meGusta=bici.color=="azul";
console.log(esGrande);
console.log(meGusta);
bici.color=colores[1];
console.log(meGusta);
meGusta= bici.color == "azul";
console.log(meGusta);
