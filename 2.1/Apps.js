const fs = require('fs')

fs.writeFileSync('note.txt', 'bla 2 bla')

fs.appendFileSync('note.txt', ' Where is everybody?')

fs.copyFileSync('note.txt', 'note_Copy.txt')

fs.renameSync('note.txt', 'new_name.txt')

// const callback = (error,files) =>{
    
//     if(error){
//         console.log(error)
//     }else{
//         console.log(files)
//     }
    
// }
// fs.readdirSync('2.1',callback)

