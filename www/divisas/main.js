const nodoFecha = document.getElementById("fecha");
const nodoCotizacionesTable = document.getElementById("cotizacionesTable");

const url = "https://api.frankfurter.app/latest";

const request = fetch(url);

const bodyJson = request.then((response) => response.json());

bodyJson.then(procesarDatos);

function procesarDatos(data) {

    //tratamiento fechas
    const fechaString = data.date;
    console.log("fecha: " + fechaString);

    const fechaNumber = Date.parse(fechaString);
    console.log("fechaNumber: " + fechaNumber);

    const fechaDate = new Date(fechaString);
    console.log(fechaDate);

    const fechaEuropea = `${fechaDate.getDate()}/${fechaDate.getMonth() + 1
        }/${fechaDate.getFullYear()}`;
    // 16/5/2021
    console.log(fechaEuropea);
    nodoFecha.innerText = fechaEuropea;

    //tasas
    const objetoCotizaciones = data.rates;

    // obtengo claves a partir del objeto  
    const claves = Object.keys(objetoCotizaciones);



    claves.forEach((divisa) => {
        //constantes
        const nodoDivisaTr = document.createElement("tr");
        const nodoDivisaTd = document.createElement("td");
        const nodoCotizacionTd = document.createElement("td");
        const nodoCotizacionEurosTd = document.createElement("td");
        //nodo divisa

        nodoDivisaTd.innerText = divisa;
        // nodoDivisaTd.className = "divisa";

        //nodo cotizacion
        nodoCotizacionTd.innerText = objetoCotizaciones[divisa];
        // nodoCotizacionTd.className = "cotizacion";

        nodoCotizacionEurosTd.innerText = Math.round(1 / objetoCotizaciones[divisa], 2);

        nodoDivisaTr.appendChild(nodoDivisaTd);
        nodoDivisaTr.appendChild(nodoCotizacionTd);
        nodoDivisaTr.appendChild(nodoCotizacionEurosTd);
        nodoCotizacionesTable.appendChild(nodoDivisaTr);
    });
}

request.catch();