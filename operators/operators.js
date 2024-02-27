//Arithmetic Operator
let val1=5**2;
let val2=val1++;
console.log(val1);
console.log(val2);
console.log(val2);

//Assignment Operator
let num1=10;
num1+=10;
console.log("Assignment operator: "+num1);

//Comparison operator
let val3=10;
val4='10'
let result=val3!==val4;
console.log("Comparison operator: "+result);

let res=10>5?"Greater than number":"Less than number";
console.log("Ternary Operator:"+res);

//logical operator
console.log("Logical Operator:")
let age=20;
if(age>=18 && age<=22 ){
    console.log("Eligible to attend the exam");
}
else{
    console.log("Not eligible to attend the exam");
}
//Bitwise Operator
let value1=10>>1;
console.log(value1)

//Testing with operators : Using operators and operands to test with null,undefined.
function check(){
    return 10 || null;
} 
console.log(check()); 
console.log(null || 10)
let num=" " && 20;
console.log(typeof num);
console.log(num);
console.log(typeof([]&&10))
