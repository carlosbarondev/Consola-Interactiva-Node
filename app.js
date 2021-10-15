require('colors');

const { guardarDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    do {
        // Imprimir menu
        opt = await inquirerMenu();
        //console.log({ opt });

        switch (opt) {
            case '1':
                // Crear opcion
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;
        }

        //guardarDB(tareas.listadoArr);

        if (opt !== "0") await pausa();
    } while (opt !== '0');
}

main();