const yargs = require('yargs')

// const chalk = require('chalk')
// console.log(chalk.green.bold("hello netta!"))

//import {chalk} from "chalk"


yargs.command({
    command: 'add',
    describe: 'add a new note2',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        //console.log('adding', argv)
        console.log('Title: ' + argv.title)
    }
})
console.log(yargs.argv)



//console.log(process.argv[1])
//console.log(yargs.argv)