//Conditional Statements:
//Which is used to check the condition if condition is true only it will go inside and execute the statements.

let time =4;
let set='pm';
if(time>=7 && set=='pm'){
    console.log("You can leave the Company");
}
else if(time>=10 && set=='am'){
    console.log("It's late hurry up to reach the company");
}
else if(time<7 && set=='pm'){
    console.log("It's not right time to leave, please be waited");
}
else{
    console.log("It's not right input");
}