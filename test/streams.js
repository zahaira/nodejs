const fs = require('fs');

const readStream = fs.createReadStream('./blog.txt', {encoding:'utf8'});

const writeStream = fs.createWriteStream('./blog1.txt');

// readStream.on('data', (chunk)=>{
//     console.log('-------New chunk--------');
//      console.log(chunk);
//      writeStream.write('\nNew chunk\n');
//      writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);

