const opts1 = {
    descripcion: {
        demand: true,
        alias: 'd',

    },
    completado: {
        alias: 'c',
        default: true
    }

};
const { descripcion: opts2 } = opts1

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', { descripcion: opts2 })
    // .command('listar', 'Listar todas las tareas')
    .command('actualizar', 'Actualiza una tarea por hacer', opts1)
    .command('borrar', 'Borrar una tarea por hacer', { descripcion: opts2 })
    .help()
    .argv;

module.exports = { argv }