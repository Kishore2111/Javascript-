//for Loop: //It is used if you know how many times execute
console.log("Even Numbers:")
for(let i=0;i<10;i+=2){
    console.log(i);
    
}

//While Loop: sum of total numbers // It is used when you want to run the condition until it fails.
let sum=0;
let i=0;

while(i<=5){
 sum+=i;
 i++;
}
console.log("Total "+sum);

//Do While Loop: // It is used when you want to execute one time even if the condition fails.
let a=10;
do{
    console.log("Executed");
    a++;
}
while(a<10)

let array=[10,20,30,40];
for(let x of array){
    console.log(x);
}