const readlineSync = require('readline-sync');
const calculateTime = (distance, speed) =>{
    th = distance / speed 
    hours = Math.round((th))
    minutes = Math.round(((th * 60) % 60)  )
    return hours+('ч') +' '+minutes+('м')
};
console.log(calculateTime(readlineSync.question('distance: '), readlineSync.question('speed: ')));