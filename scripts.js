import { DatosMeteorologicos } from "./clases.js";
import { ordenarArray } from "./funciones.js";

async function obtenerDatosMeteorologicos(url) {
  try {
    const request = await fetch(url);
    const data = await request.json();
    // console.log(data);
    
    if (data.descripcion === undefined) {
      console.log("Los datos se han obtenido correctamente.");
    } else {
      console.log(`Mensaje recibido: ${data.descripcion}`);
    };    

    const dataMeteorologicos = data.map((elemento) => new DatosMeteorologicos(elemento.alt, elemento.dmax, elemento.dv, elemento.fint, elemento.hr, elemento.idema, elemento.lat, elemento.lon, elemento.prec, elemento.ta, elemento.tamax, elemento.tamin, elemento.ubi, elemento.vmax, elemento.vv));
    
    let listaValores = [];
    for (let i = 0; i < dataMeteorologicos.length; i++) {     
      listaValores.push(dataMeteorologicos[i].ta);  
    };

    dataMeteorologicos[0].informacion(); 
    ordenarArray(listaValores); 

  } catch (error) {
    console.log("Lo siento... No se han podido cargar los datos.");
  };
};

const url = "https://opendata.aemet.es/opendata/sh/4323e5d3"; 

obtenerDatosMeteorologicos(url);
