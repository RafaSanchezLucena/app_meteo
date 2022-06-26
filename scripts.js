import { ordenarArray } from "./funciones.js";

const boton = document.querySelector(".boton");

const url = "https://opendata.aemet.es/opendata/sh/4323e5d3";

const obtenerDatosMeteorologicos = async (url) => {
  try {
    const acces = await fetch(
      "https://opendata.aemet.es/opendata/api/observacion/convencional/datos/estacion/8059C/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW5jaGV6Lmx1Y2VuYUBnbWFpbC5jb20iLCJqdGkiOiIwN2E4NDBiNC1mMDhhLTQ5ODAtOTU3YS1kYjhmYjFmOGE0NjMiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTYzNzMyOTUwNywidXNlcklkIjoiMDdhODQwYjQtZjA4YS00OTgwLTk1N2EtZGI4ZmIxZjhhNDYzIiwicm9sZSI6IiJ9.7AtwvRgQGx_WiwR_IRjfDg43YOF7EVsVWhFnA1YADiQ"
    );
    const request = await fetch(url);
    const data = await request.json();
    // console.log(data);

    if (data.descripcion === undefined) {
      console.log("Los datos se han obtenido correctamente.");
    } else {
      console.log(`Mensaje recibido: ${data.descripcion}`);
    }
    let listaValores = [];
    for (let i = 0; i < data.length; i++) {
      listaValores.push(data[i].ta);
    }

    console.log(
      `Los datos se obtienen de la población de ${data[0].ubi}, situada a una altitud de ${data[0].alt} metros, latitud: ${data[0].lat} y longitud: ${data[0].lon}.`
    );

    ordenarArray(listaValores);
  } catch (error) {
    console.log(`Lo siento... No se han podido cargar los datos: ${error}`);
  }
}

boton.addEventListener("click", () => {
  obtenerDatosMeteorologicos(url);
});
