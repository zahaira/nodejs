const fs = require('fs');//files system: fs

//reading files
// fs.readFile('./blog.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

//writing files
// fs.writeFile('./blog.txt', 'hello world',()=>{
//     console.log('file was written');
// });

//directories

// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created');
//     })
// }else {
//     fs.rmdir('./assets', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }


//deleting files
if(fs.existsSync('./blog.txt')){
    fs.unlink('./blog.txt', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}

