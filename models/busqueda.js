import axios from 'axios';

export class Busquedas{
    historial = ['Tegucigalpa', 'Bogota','Madrid', 'Medellin' ];
    //consejo: usar try y catch para peticiones http 

    constructor(){
   //Leer la base de datos si existe
    }

    get paramsMapbox(){
        return {
            //se sacan de postman 
            'limit': 10,
            'language': 'es',
            'access_token': process.env.MAPBOX_KEY, 

            
        }
    }
    async ciudad (lugar =''){
        try{
            //peticion http 
       const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        //parametros es lo que va despues de la peticion 
        params: this.paramsMapbox
       
    });
       const respuesta= await instance.get();
       //para ver que viene ahi
       
       return respuesta.data.features.map(lugar =>({
        id: lugar.id,
        nombre: lugar.place_name,
        //primera posicion 
        lng: lugar.center[0],
        //segundaposicion 
        lat: lugar.center[1],

       }));
        

        }catch(error){
            console.log('No se encontro informacion, verifique :)')
            return[]; 

        }
    }

    get OPENWEATHER(){
        return {
            //se sacan de postman 
            
            appid: process.env.OPENWEATHER_KEY, 
            units: 'metric',
            lang: 'es'
        }
    }

    //Para poder mostrar la temperatura 
    async climaLugar(lat, lon){
        try{
            //instancias de axions 
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                //parametros es lo que va despues de la peticion 
                params: {...this.OPENWEATHER, lat, lon}
               
            });
            const respuesta= await instance.get();
            const {weather, main}=respuesta.data;
            //respuesta 
            return {
                //[0] para seleccionar descripcion dentro del arreglo de weather 
                desc:weather[0].description,
                min:main.temp_min,
                max: main.temp_max,
                temp:main.temp
            }

        }catch(error){
        console.log('Verifique la ciudad')
        }
    }
}