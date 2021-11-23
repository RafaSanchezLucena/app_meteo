export class DatosMeteorologicos {constructor(alt, dmax, dv, fint, hr, idema, lat, lon, prec, ta, tamax, tamin, ubi, vmax, vv) {
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
  };

  informacion() {
    console.log(
      `Los datos se obtienen de la población de ${this.ubi}, que está a una altitud de ${this.alt} metros, latitud: ${this.lat} y longitud: ${this.lon}.`
    );
  };
};
