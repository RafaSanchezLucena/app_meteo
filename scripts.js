import { DatosMeteorologicos } from "./clases.js";
import { ordenarArray } from "./funciones.js";

const boton = document.querySelector(".boton");

async function obtenerDatosMeteorologicos(url) {
  try {
    const acces = await fetch("https://opendata.aemet.es/opendata/api/observacion/convencional/datos/estacion/8059C/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW5jaGV6Lmx1Y2VuYUBnbWFpbC5jb20iLCJqdGkiOiIwN2E4NDBiNC1mMDhhLTQ5ODAtOTU3YS1kYjhmYjFmOGE0NjMiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTYzNzMyOTUwNywidXNlcklkIjoiMDdhODQwYjQtZjA4YS00OTgwLTk1N2EtZGI4ZmIxZjhhNDYzIiwicm9sZSI6IiJ9.7AtwvRgQGx_WiwR_IRjfDg43YOF7EVsVWhFnA1YADiQ")
    const request = await fetch(url);
    const data = await request.json();
    // console.log(data);
    
    if (data.descripcion === undefined) {
      console.log("Los datos se han obtenido correctamente.");
    } else {
      console.log(`Mensaje recibido: ${data.descripcion}`);
    };    

    const dataMeteorologicos = data.map((element) => new DatosMeteorologicos(element.alt, element.dmax, element.dv, element.fint, element.hr, element.lat, element.lon, element.prec, element.ta, element.tamax, element.tamin, element.ubi, element.vmax, element.vv));

        
    let listaValores = [];
    for (let i = 0; i < dataMeteorologicos.length; i++) {     
      listaValores.push(dataMeteorologicos[i].ta);  
    };

    dataMeteorologicos[0].informacion(); 

    ordenarArray(listaValores); 

  } catch (error) {
    console.log("Lo siento... No se han podido cargar los datos.");
    console.log(error);  };
};

const url = "https://opendata.aemet.es/opendata/sh/4323e5d3"; 
  

boton.addEventListener("click", () => {
  obtenerDatosMeteorologicos(url);
});
