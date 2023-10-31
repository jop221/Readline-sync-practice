const readlineSync = require('readline-sync');
const reverseStringWithException = (str, exception) => {
    function rev (str) {
        const splitT= str.split("");
        const revT= splitT.reverse();
        const joinT= revT.join("");
        return joinT
    }
    return  exception + ' ' + rev(str.substring(0, str.indexOf(' ')));

}; 
console.log(reverseStringWithException(readlineSync.question('str: '),readlineSync.question('exception: ')));