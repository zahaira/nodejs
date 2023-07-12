

// setTimeout(() => {
//     console.log('in the timeout');
//     clearInterval(int);
// }, 3000);

// const int = setInterval(() => {
//     console.log('in the interval');
// }, 1000);

// console.log(__dirname);
// console.log(__filename);

// const x = require('./module');
// console.log(x.ages);

const {modules, ages} = require('./module');
console.log(modules,ages);