import inquirer from 'inquirer';
import colors from 'colors';

const preguntas =[
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: 1,
                name:  `${'1.'.green}Buscar Ciudad`

            },
            {
                value: 2,
                name:  `${'2.'.green} Historial`

            },
            {
                value: 0,
                name:  `${'3.'.green} Salir`

            },
        ]

    }
];


export const inquirerMenu = async()=>{
   // console.clear();

    console.log("===============================".green);
    console.log("=====seleccione una opcion=====".white);
    console.log("===============================\n".green);

    //Prompt hacer preguntas
   const {opcion} = await inquirer.prompt(preguntas);
   return opcion;
}
export const pausa= async()=>{
    const seleccionado ={
        type: 'input',
        name: 'enter',
        message: `Persione ${'ENTER'.red} para continuar ` 
    }
    console.log('\n');
    await inquirer.prompt(seleccionado);
    }
export const leerInput = async(message)=>{
    const pregunta =[
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.lenght ===0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(pregunta);
    return desc;

}

export const listadoTareasBorrar = async(tareas =[])=> {
    //retorna un arreglo transformando los hijos 
    const choices = tareas.map((tarea, i) =>{
    const index =`${i + 1}.`.green;
        return{
            value: tarea.id,
            name: `${index} ${tarea.desc}`

        }
    });
    choices.unshift({
        value:'0',
        name:'0. '.red + 'Cancelar'
    })

    const preguntas =[
        {
            type: 'list',
            name:'id',
            message: '¿Qué tarea desea borrar?',
            choices
        }
    ]
    //sacar menu para que se pueda seleccionar 
    const {id} = await inquirer.prompt(preguntas);
    return id;
  

}
 export const confirmar  = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}   


export const mostrarListadoChecklist = async(tareas =[])=> {
    //retorna un arreglo transformando los hijos 
    const choices = tareas.map((tarea, i) =>{

    const index =`${i + 1}.`.green;

        return{
            value: tarea.id,
            name: `${index} ${tarea.desc}`,
            checked: (tarea.completado) ?true : false

        }
    });

    
    
    const pregunta =[
        {
            type: 'checkbox',
            name:'ids',
            message: 'Seleccione',
            choices
        }
    ]
    //sacar menu para que se pueda seleccionar 
    const {ids} = await inquirer.prompt(pregunta);
    return ids;
  

}
