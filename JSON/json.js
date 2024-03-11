
let json={

  "workouts": [

    {

      "id": 1,

      "name": "Push-ups",

      "category": "Strength Training",

      "duration": 30,

      "caloriesBurned": 100,

      "difficulty": "Beginner",

      "equipment": ["None"],

      "description": "Push-ups are a great bodyweight exercise for strengthening the chest, shoulders, and triceps."

    },

    {

      "id": 2,

      "name": "Running",

      "category": "Cardio",

      "duration": 45,

      "caloriesBurned": 300,

      "difficulty": "Intermediate",

      "equipment": ["Running Shoes"],

      "description": "Running is an effective cardiovascular exercise that can help improve endurance and burn calories."

    },

    {

      "id": 3,

      "name": "Yoga",

      "category": "Flexibility",

      "duration": 60,

      "caloriesBurned": 150,

      "difficulty": "Beginner",

      "equipment": ["Yoga Mat"],

      "description": "Yoga is a practice that combines physical postures, breathing techniques, and meditation to promote relaxation and flexibility."

    }
    ,
    {

      "id": 4,

      "name": "Keto",

      "category": "Durability",

      "duration": 70,

      "caloriesBurned": 750,

      "difficulty": "Beginner",

      "equipment": ["No Need"],

      "description": "Yoga is a practice that combines physical postures, breathing techniques, and meditation to promote relaxation and flexibility."

    }

  ],

  "categories": ["Strength Training", ["Cardio", "Flexibility", ["Balance", "Endurance"]]],

  "equipment": ["Dumbbells", "Treadmill", "Yoga Mat", "Bicycle", "Resistance Bands", "Jump Rope"],

  "difficulties": ["Beginner", "Intermediate", "Advanced"]

};

// // //Convert the JSON to String:
// // let string=JSON.stringify(json);
// // console.log("String: "+string);

// // //Convert the String to JSON:
// // let array=Array.of(string);
// // console.log( array);


// //Using Length to find out the length of array:
// let arrayLength=json.length;
// console.log("Array Length: "+arrayLength);

// // //Using at() Prototype:
// // let atPrototype=json.at(0)

// console.log(json.workouts.length)
// console.log(json.workouts[0].category)



// //To get the specific data(Workout_categories) in json:
// let workout_Categories=[];
// for(let i=0;i<json.workouts.length;i++){
// workout_Categories.push(json.workouts[i].category);
// }
// console.log(workout_Categories);

// //To get Key Value(index) of json:
// let array_keys=[];
// for(keys in json){
//   array_keys.push(keys);
// }
// console.log(array_keys);

// //To get Index value of specific keys:at()
// let array_At=json.workouts.at(1);
// console.log(array_At);

// //To concat the array:concat()
// let array_Concat=json.workouts.concat(json.categories,json.difficulties,json.equipment);
// console.log(array_Concat);
// console.log(array_Concat[0]);

// //with prototype:
// let array_with=array_Concat.with(0,'hvhjjvghg');
// console.log(array_with);

// // copyWithin prototype:
// let array_CopyWithin=array_Concat.copyWithin(0,1);
// console.log(array_CopyWithin);

// //entries prototype:
// let array_entries=json.workouts.entries();
// let iterator=array_entries.next().value
// console.log(iterator);

// //Every prototype:
// let array_every=json.workouts.every(val=>val.category=='Strength Training');
// console.log(array_every);

// //Some Prototype:
// let array_some=json.workouts.some(val=>val.caloriesBurned>100);
// console.log(array_some);

//fill Prototype:
// let array_fill=json.workouts.fill(0,1);
// console.log(array_fill);

// console.log(json);

//filter Prototype:
let array_filter=json.workouts.filter((val,index,arr)=>{return val.duration>=45}).map((val)=>{return val.caloriesBurned});
console.log(array_filter);

//forEach prototype:
let workout_name=[];
let array_foreach=json.workouts.forEach((val)=>{
  
  if(val.difficulty==='Beginner'){
    workout_name.push(val.name);
  }
})
console.log(workout_name);

//find prototype:
let array_find=json.workouts.find((val)=>val.duration>45);
console.log(array_find);

//findIndexOf prototype:
let array_findindex=json.workouts.findIndex((val)=>val.duration>45);
console.log(array_findindex);

//findLast prototype:
let array_findlast=json.workouts.findLast((val)=>val.duration>45);
console.log(array_findlast);

//findlastindex prototype:
let array_findlastindex=json.workouts.findLastIndex((val)=>{return val.duration>45});
console.log(array_findlastindex);

//from prototype:
let array_from=Array.from('Muscular lift');
console.log(array_from);
console.log(json);

//flat prototype:
let array_flat=json.categories.flat();
console.log(array_flat);

//flatmap prototype:
let array_flatmap=json.categories.flatMap((value,index)=>{
  if(value[0]==='S')
    return value
}).filter((value)=> typeof value!=='undefined')
console.log(array_flatmap);


//includes prototype:
let array_includes=json.equipment.includes('Bicycle')
console.log(array_includes)

//indexof Prototype:
let array_indexof=json.equipment.indexOf('Yoga Mat');
console.log(array_indexof);

//isarray Prototype:
let array_isarray=Array.isArray(json.workouts);
console.log(array_isarray);

//join prototype:
let array_join=json.equipment.join();
console.log(array_join);

//keys prototype:
let array_keys=json.difficulties.keys();
for(key of array_keys){
  console.log(key);
}

//values prototype:
let array_values=json.difficulties.values();
for(value of array_values){
  console.log(value);
}

//map prototype:
let array_map=json.workouts.map((value)=>{return `Name:${value.name} , CaloriesBurned:${value.caloriesBurned}`});
console.log(array_map);

//reduce prototype:
let array_reduce=json.workouts.map((value)=>{return value.caloriesBurned}).reduce((acc,val)=>{return acc+val});
console.log(array_reduce);

//pop prototype:
let array_pop=json.workouts.pop();
console.log(json);

//push prototype:
let array_push=json.workouts.push("Dummy Push");
console.log(json);

//reverse Prototype:
let array_reverse=json.workouts.reverse();
console.log(array_reverse);

//shift Prototype:
let array_shift=json.workouts.shift();
console.log(array_shift);

//unshift Prototype:
let array_unshift=json.workouts.unshift("Unshift value");
console.log(array_unshift);
console.log(json);

//slice prototype:
let array_slice=json.workouts.slice(0,2);
console.log(array_slice);

console.log(json)

//spliced Prototype:
let array_spliced=json.workouts.splice(0,2,4);
console.log(array_spliced);
console.log(json);

//sort prototype:
let array_sort=json.equipment.sort();
console.log(array_sort);

//tostring prototype:
let array_tostring=json.equipment.toString();
console.log(array_tostring);

console.log(json);

//tosorted prototype:
let array_tosorted=json.equipment.toSorted();
console.log(array_tosorted);

console.log(json.equipment);

//toreversed prototype:
let array_toreversed=json.equipment.toSortedReversed();
console.log(array_toreversed);

//tospliced prototype:
let array_tospliced=json.equipment.toSpliced();