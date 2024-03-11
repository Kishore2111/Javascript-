let person={
    name:"Vidhyasree",
    age:21,
    role:"Js Developer",
    greet (){
        console.log(`Hi ${this.name}!! Welcome to Proglint for ${this.role}..`)
    }
}

console.log(person.name);
let person2=Object.create(person);
person2.name="Jaiguna";
person2.role="Java Team";
person.greet();
person2.greet();
let person3;

for(let i=0;i<10;i++){
    person3=Object.create(person)
}
console.log(person3);
for(val in person){
    // if(val===){
    //     console.log(person.val());
    // }
    console.log(person[val]);
    
}