const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

createFile(argv.b, argv.l, argv.u)
    .then(fileName => console.log(fileName, 'creada'))
    .catch(err => console.log(err));