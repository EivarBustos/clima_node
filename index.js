import { inquirerMenu, leerInput, pausa } from "./helper/inquirer.js"
console.clear();
const main = async()=>{
    let opt ='';
    do{
            // Imprimir menu 
     opt= await inquirerMenu();
     switch(opt){
        case '1':
            console.log(" selecciono la 1")


            break;
        case '2':
            console.log(" selecciono la 2")
            
            break;
        
        }
    if(opt !== 0) await pausa();
  }while(opt !== 0);
}



main();