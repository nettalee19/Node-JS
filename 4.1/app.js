const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'add numbers',
    builder:{
        num1:{
            describe:'number',
            demandOption: true,
            type: 'number'
        },
        num2:{
            describe:'number',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function(argv){
        console.log('Sum is: ' + (argv.num1+ argv.num2))
    }
})
//console.log(yargs.argv)



yargs.command({
    command: 'sub',
    describe: 'substruct numbers',
    builder:{
        num1:{
            describe:'number',
            demandOption: true,
            type: 'number'
        },
        num2:{
            describe:'number',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function(argv){
        console.log('Sub is: ' + (argv.num1- argv.num2))
    }
})
//console.log(yargs.argv)

yargs.command({
    command: 'mult',
    describe: 'multiple numbers',
    builder:{
        num1:{
            describe:'number',
            demandOption: true,
            type: 'number'
        },
        num2:{
            describe:'number',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function(argv){
        console.log('Sub is: ' + (argv.num1 * argv.num2))
    }
})
//console.log(yargs.argv)

yargs.command({
    command: 'pow',
    describe: 'power number',
    builder:{
        num:{
            describe:'number',
            demandOption: true,
            type: 'number'
        },
    },
    handler: function(argv){
        //console.log('Power is: ' + (argv.num * argv.num))
        console.log('Power is: ' + Math.pow(argv.num, 2))
    }
})
console.log(yargs.argv)



//console.log(process.argv[1])
//console.log(yargs.argv)