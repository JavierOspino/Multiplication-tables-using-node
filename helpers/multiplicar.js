const fs = require('fs');

const createFile = async (num = 5, list = false, until = 10) => {

    try {
        let output = '';

        for (let i = 1; i < until + 1; i++) {
            output += `${num} x ${i} = ${num * i}\n`;
        }

        if (list) {
            console.log('============');
            console.log('Tabla del', num);
            console.log('============');

            console.log(output);
        }

        fs.writeFileSync(`./output/tabla-${num}.txt`, output);

        return `tabla-${num}.txt`;

    } catch (err) {
        throw (err);
    }
};

module.exports = {
    createFile
}