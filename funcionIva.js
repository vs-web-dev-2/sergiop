
const iva=0.21;

function calcularIva(base){

 
    let ivaProducto=base*iva;
    let precioTotal=base+ivaProducto;

    console.log("Base...."+ base);  
    console.log("iva...."+ iva);  
    console.log("ivaProducto...."+ ivaProducto);  
    
    return precioTotal;

    

}

let precioProducto = calcularIva(200);

console.log("Precio total con iva:...." +  precioProducto );
