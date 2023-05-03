import dotenv from "dotenv";
dotenv.config({path:'./token.env'});

import { inquirerMenu, leerInput, pausa } from "./helper/inquirer.js"
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
            const lugar = await leerInput('Ciudad :');
            //await porque se va a trabajar cn una Promesa
            await busquedas.ciudad(lugar);
            // Buscar los lugares
            // Seleccionar el lugar 
            // Mostrar los resultados
            console.log(`\n Informacion de la ciudad\n`.green);
            console.log('Ciudad :');
            console.log('Latitud :');
            console.log('Longitud :');
            console.log('Temperatura :');
            console.log('Temperatura Minima :')
            console.log('Temperatura Maxima:')




            break;
        case 2:
            console.log(" selecciono la 2")
            
            break;
        
        }
    if(opt !== 0) await pausa();
  }while(opt !== 0);
}



main();