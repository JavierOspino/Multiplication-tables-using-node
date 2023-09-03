const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Is the base of the multiplication tables'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean', 
        default: true,
        describe: 'List the multiplication tables'
    })
    .option('u', {
        alias: 'until',
        type: 'number',
        default: 10,
        describe: ''
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw ('La base tiene que ser un numero.');
        }else if(argv.l){

        }
        return true;
    })
    .argv;

module.exports = argv;