// La clase que utilizaremos para crear objetos con los datos obtenidos de la AEMET.
class DatosMeteorologicos {
  constructor(alt, dmax, dv, fint, hr, idema, lat, lon, prec, ta, tamax, tamin, ubi, vmax, vv) {
    this.alt = alt;
    this.dmax = dmax;
    this.dv = dv;
    this.fint = fint;
    this.hr = hr;
    this.idema = idema;
    this.lat = lat;
    this.lon = lon;
    this.prec = prec;
    this.ta = ta;
    this.tamax = tamax;
    this.tamin = tamin;
    this.ubi = ubi;
    this.vmax = vmax;
    this.vv = vv;
  }

  // Método que nos muestra información más legible de la población seleccionada.
  informacion(){
      console.log(`Los datos se obtienen de la población de ${this.ubi}, que está a una altitud de ${this.alt} metros, latitud: ${this.lat} y longitud: ${this.lon}.`);
    }
};

// Función asíncrona mediante la cual obtenemos los datos ofrecidos por la AEMET.
async function obtenerDatosObservacion(url) {
  try {
    // Petición de datos y conversión a formato Json.
    const request = await fetch(url);
    const data = await request.json();
    console.log(data);

    // Utilizamos map para instanciar cada uno de los elementos del array.
    const dataObject = data.map((elemento) => new DatosMeteorologicos(elemento.alt, elemento.dmax, elemento.dv, elemento.fint, elemento.hr, elemento.idema, elemento.lat, elemento.lon, elemento.prec, elemento.ta, elemento.tamax, elemento.tamin, elemento.ubi, elemento.vmax, elemento.vv));
    
    // Mediante esta iteración, convertimos en array las propiedades del objeto.
    var listaValores = [];
    for (let i = 0; i < dataObject.length; i++) {     
      listaValores.push(dataObject[i].ta);  //Aquí hemos elegido la temperatura máxima(ta).
    }

    dataObject[0].informacion();  // Mostramos información de la población.
    console.log(listaValores);  // Mostramos el array

  } catch (error) {
    console.log(error);
  }
}

// Dirección web de la población de la cual queremos obtener los datos metereológicos.
const url = "https://opendata.aemet.es/opendata/sh/4323e5d3"; 

obtenerDatosObservacion(url);
