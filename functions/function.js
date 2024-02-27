//Basic Functions with calling
function multiply(num1,num2){
    return num1*num2;
}
console.log("Multiply "+multiply(5,2)); // Multiply 10


//Functions in factorial's
function factorial(n){
    return n<2?1:n*factorial(n-1);
}
console.log(factorial(5)); //120



//function Expression: It means using the function declaration in a variable.
let nums=function sum(num1,num2){
    return num1+num2;
}
console.log(nums(4,4)); // 8


//function Hoisting : It means calling the function first and defining the function.It only works with function declaration not with function expression.
console.log(square(10));
function square(a){
  return a**2; // 100
}


//Rest Parameters : Which is used to get multi input as arguments(Syntax: ...Parametername eg:function number(...values))
function multiply(multiplier, ...theArgs) {
    console.log(multiplier)// 10
    console.log(theArgs) // [ 20, 30, 40, 50 ]
    return theArgs.map((x) => multiplier * x); //[ 200, 300, 400, 500 ]
  }
console.log(multiply(10,20,30,40,50));
  

//Arrow Functions: function in short line or single line.
  let names=()=>{
    console.log("Welcome to hello World!");
  }
  names(); // Welcome to hello World!

//Auto Invoke Function: The function calls automatically 
  (function(){
    console.log("Hi Welcome to Vs code Environment");
  })(); // Hi Welcome to Vs code Environment

//Generator function:
  function*generate(i){
    yield i;
    yield i+10;
  }
  generate(10);


// Named function:// The function with named in function expression is called named function.
const people=function raj(){
  console.log("Welcome to js world "+ "Raj");
}
people(); // Welcome to js world Raj

// Callback Function: // To passing the function as arguments 
function greeting(callback){
  console.log("Hi "+callback());
}
greeting(()=>{return "Ramesh"}); //Hi Ramesh