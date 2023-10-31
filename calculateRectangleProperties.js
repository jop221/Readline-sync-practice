const readlineSync = require('readline-sync');
const calculateRectangleProperties = (width, height) =>{
   const square=width*height;
   const perimete= width*2+height*2;
   return square +'  '+perimete
 
}
console.log(calculateRectangleProperties(readlineSync.question('side 1:'), readlineSync.question('side 2:')));