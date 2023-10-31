const readlineSync = require('readline-sync');
const  calculateDiscount = (price, discountPercentage) => {
    const a= price*discountPercentage/100;
    return price-a
};
console.log(calculateDiscount(readlineSync.question('price: '),readlineSync.question('percentage: ')));