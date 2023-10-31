const readlineSync = require('readline-sync');
const calculateEmployeeBonus = (salary, performanceRating) => {
    if ( performanceRating >= 8){
        salary = salary * 0.20;
  }else{
    salary = salary * 0.10;  
  }
  
  return salary;

}; 
console.log(calculateEmployeeBonus(readlineSync.question('salary: '), readlineSync.question('rating: ')));