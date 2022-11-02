//let vs const vs var
//TDZ
//declaration of variables
let a,b,c;
var b;
const a;  //will throw reference error
//TDZ start here
console.log(a); //will throw error
console.log(a); //will give undefined
//TDZ for b ends here
b =10
console.log(b); //10

/* constant is used for data integrity so that no one can change that data*/ 