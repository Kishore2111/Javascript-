let array=["ram",32,26,0,true];
console.log(array[0]);
for(n1 of array){
    console.log(n1);
}
let person1={
    name:'Sam',
    age:23,
    Role:'js',
    fn:function (){
        console.log("Do Work....");
    }
}
console.log(person1.name);
for(key in person1){
    console.log(key+ " : "+person1[key]);
}
let number=189.57832;
console.log(number);
console.log(typeof number);

let phones=['Redmi','Poco','Samsung','Vivo','Oppo','Realme'];
let oldphones=['lava','reliance']

//length: It will give you the length of the array.
console.log(phones.length);

//toString: It will covert the array into strings
console.log(phones.toString());

//join:It will join the array (like covert the array to String)by it's symbol
console.log(phones.join("-->"));

//pop: It will pop(delete or remove) the values from the last index of array.
console.log(phones.pop());

//Push: It will push(add) the values from the last index of array
console.log(phones.push("Nokia"));

//at: It give you the exact value of given syntax
console.log(phones.at(2));

//Shift: It will remove the first index value in the array.
phones.shift();
console.log(phones);

//Unshift: It will add the values to the 1st index of array
phones.unshift('IQ')
console.log(phones);

//Concat: It will Add 2 arrays or add the values to array by concating operation.
let newarray=phones.concat(oldphones);
console.log(newarray.concat('Blackberry'));
console.log(newarray);

//copyWithin: It will copy the values and overwrite the values in the array. 
//1st parameter - It represents start from which index it gonna copy.
//2nd parameter - It represents start from which index to overwrite.
//3rd parameter - It represents end index to overwrite.

let Soilders=['Jhon','varun','Mathew','Henderson','Manoj'];
Soilders.copyWithin(2,0,2);
console.log(Soilders);


//flat: It will add the sub array into single one.
let matrix=[[26,32,11],[67,54,41],[8,90,62],[12,71,22]];
console.log(matrix.flat());

//Splice: It is used to  remove the values or add the values to the array.
let Car=['Maruti','Bens','Audi','volvo','Mahindra'];
Car.splice(3,0,'Bently');
console.log(Car);
Car.splice(3,1,'Safari');
console.log(Car);


//toSpliced: It is  an modern way to remove values or add values without changing the original array.It will create a new array.
let newCar=Car.toSpliced(1,1,'Tesla');
console.log(newCar);

//slice: It will give you the sub array values (You can get specific values)
console.log(Car.slice());

//indexOf: It is used to find out the index value:
let arr=[12,32,10,26,10,18,10,78];
console.log(arr.indexOf(10));
console.log("index 2 parameter: "+arr.indexOf(10,3))

//lastIndexOf: It is used to find out the lastindex value(which repeats value on last time) in an array.
console.log(arr.lastIndexOf(10));

//includes: It is used to check the value is present or not .It returns true or false.
console.log(arr.includes(28));

//find: It returns the first array element that meets the condition.
let nums=[10,4,5,3,33,42,52];
function check(val,index,arr){
    return val>33
}
console.log(nums.find(check));

//findIndex: It returns the index value by checking the condition meets.
console.log(nums.findIndex(check));

//findLast: It returns the last value by checking the condition.
console.log(nums.findLast(check));

//findLastIndex: It returns the last value index by checking the condition.
console.log(nums.findLastIndex(check));

//Sort: To sort an array(String value) in Ascending order.
//If the result is negative, a is sorted before b.
//If the result is positive, b is sorted before a.
//console.log(nums.sort());
let numed=[70,60,5,3,33,42,52];
console.log("Normal Sort: "+numed.sort());

//Comparator function: It is used to sort the number values in Array.
console.log("Comparator function: "+numed.sort((a,b)=>{ console.log("a:"+a)
console.log("b:"+b)
return a-b}));

//reverse: It is used to reverse the array(It print from last indx value to first index value).
console.log(numed.reverse());

//toSorted: It is used to sort the values in ascending order.It does not change the original array but it creates a new array.
num1=[2,89,37,27,3,6,54,12];
console.log(num1.toSorted());
console.log(num1);

//toreverse: It is used to reverse the array(It puts in new array it does not change the old array )
console.log(num1.toReversed());

//Sort in Array of objects:
let books=[
 {   nam:"How to win friends and Influence people", author:"Jhon Rosewelt" ,year:2018},
 {   nam:"Atomic Habits", author:"Robert Jackson", year:2008},
 {   nam:"Rich Dad Poor Dad", author:"Mester Brook", year:2019}
];



// console.log(books);

//If you want to sort the numbers in array of objects:
console.log(books.toSorted((a,b)=>{return a.year-b.year}));

//If you want to Sort the alphabets in array of objects: 
console.log(books.toSorted((a,b)=>{
  if(a.author<b.author)
    return -1;
  else if(a.author>b.author)
    return 1;
  return 0;
}));
console.log(books);

//forEach: It is an method.You have pass the function as arguments called callbackfunction.
books.forEach((value,index,arr)=>{ console.log("Book Name: "+books[index].nam)}); 
//O/P:
//Book Name: How to win friends and Influence people
//Book Name: Atomic Habits
//Book Name: Rich Dad Poor Dad

//Map: It is an method used to perform  operations and put into a new array.
let result=books.map((val,index,arr)=>{ return books[index].year+1});
console.log(result); //[ 2019, 2009, 2020 ]

//flatMap: It is used to perform operations and put into a new array 
let result2=books.flatMap((val,index,arr)=>{return books[index].author});
console.log(result2);

//filter: It is an method used to perform conditions and put into a new array
let result3=[26,32,14,13,11,56]
console.log(result3.filter((val,index,arr)=>{return val>=26}));
//console.log(filterRes);
console.log(result3);

//reduce: It is an method used to add the array values.
console.log(result3.reduce((tot,val)=>tot+val,initialize=5));
console.log(result3.reduce((tot,val)=>tot*val));

//reduceRight: It is an method used to add the array values from right(last).
console.log(result3.reduceRight((tot,val)=>tot*val));

//every: It is an method used to check every elements in an array passess the condition.(It checks every element passes the condition then only returns true.)
console.log(result3.every((val)=>{return val>10}));

//some: It is an method used to some array values passess the condition.(if one value passes the condition means it return false)
console.log(result3.some((val)=>{return val>40}))

//from: It is an method used to convert the string into array of elements.
console.log(Array.from('jfsjsksg'))

//keys: It is an method used to return new array Iterator object(index values in array).
result4=result3.keys();
for(key of result4){
    console.log(key);
}

