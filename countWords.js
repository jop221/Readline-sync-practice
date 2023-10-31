const readlineSync= require('readline-sync');
const countWords = (sentence) => {
    return sentence.split(" ").length

};
console.log(countWords(readlineSync.question('sentence:')));