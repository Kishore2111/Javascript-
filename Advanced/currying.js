function calcvolume(length){
    console.log(length);
    return function(breadth){
        return function(height){
            return length*breadth*height;
        }
    }
}
console.log(calcvolume(5)(10)(15));