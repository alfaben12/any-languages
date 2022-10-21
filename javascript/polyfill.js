//Polyfill for .filter( )

Array.prototype.myFilter = function(callback){ //Adding our method to inbuilt Array 
    var newArr = []; //Creating new array
    for(i=0; i<this.length; i++){ //Iterating through the entire array 
	       var result = callback(this[i], i, this); //Calling the callback function with the element, its index and array
         if(result){ //If the result is true means the item satisfies the callback logic
                newArr.push(this[i]); //Push the item that has passed our callback logic to our new array 
            }
        }
    return newArr; //Return the new array
}

arr = [1,2,3,4,5,6,7,8,9,10];
arr2 = arr.myFilter((no) => no > 5); //Calling our function and passing callback function 
console.log(arr2); //6,7,8,9,10

//Polyfill for .map( )

Array.prototype.myMap= function(callback){
    var newArr = [];
    for(i=0; i<this.length; i++){
                 newArr.push(callback(this[i], i, this));
        }
    
    return newArr;
}

arr = [1,2,3,4,5,6,7,8,9,10];
arr2 = arr.myFilter((no) => no * 2);
console.log(arr2); //2,4,6,8,10,12,14,16,18,20

//Polyfill for .reduce( )
Array.prototype.myReduce = function(callback, initial = null){
    var accumulator = initial;
    for(i=0; i<this.length; i++){
             accumulator = callback(acc, this[i], i, this)   
        }
    return accumulator;
}

arr = [1,2,3];
arr2 = arr.myFilter((prev, curr) => prev + curr);
console.log(arr2); //6

//Polyfill for .forEach( )
Array.prototype.myForEach = function(callback){
    for(i=0; i<this.length; i++){
                callback(this[i], i, this);
        }
} 

arr = [1,2,3,4,5,6,7,8,9,10];
arr2 = arr.myForEach((no) => console.log(no));
console.log(arr2);