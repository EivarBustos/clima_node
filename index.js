import dotenv from "dotenv";
dotenv.config({path:'./token.env'});

import { inquirerMenu, leerInput, listadoLugares, pausa } from "./helper/inquirer.js"
import { Busquedas } from "./models/busqueda.js";



console.clear();
const main = async()=>{
    const busquedas = new Busquedas();
    let opt ='';
    do{
            // Imprimir menu 
     opt= await inquirerMenu();
     switch(opt){
        case 1:
            //Mostrar mensaje para escribir 
            const termino = await leerInput('Ciudad :');
            // Buscar los lugares
            const lugares = await busquedas.ciudad(termino);
            // Seleccionar el lugar 
            const seleccionado = await listadoLugares(lugares);
            // Mostrar el lugar, latitud etc
            const lugarSel = lugares.find(l => l.id === seleccionado);

            //Clima 
            const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng)
            
            //await para que espere 
            await busquedas.ciudad(lugares);
            
            
            // Mostrar los resultados
            console.clear();
            console.log(`\n Informacion de la ciudad\n`.green);
            console.log(`Ciudad : ${lugarSel.nombre}`.green);
            console.log('Latitud :', lugarSel.lat);
            console.log('Longitud :', lugarSel.lng);
            console.log('Temperatura :', clima.temp);
            console.log('Temperatura Minima :', clima.min)
            console.log('Temperatura Maxima:', clima.max)
            console.log('Temperatura Maxima:', clima.desc.green)




            break;
        case 2:
            console.log(" selecciono la 2")
            
            break;
        
        }
    if(opt !== 0) await pausa();
  }while(opt !== 0);
}



main();