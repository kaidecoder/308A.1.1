//Part I - Stack Overflow
//Declare a global counter variable.
let counter

//Create a simple function that increments the variable, and then calls itself recursively.
/**
 * Recursive function that increments a variable
 * @param  {Number} counter The variable to be incremented
 * @param  {}
 * @return {Number}      The increments
 */
function incrementRecursive(counter){
    try {
        if(counter < 9000){
            console.log(counter)
        }else{
            throw "Error - n is too small"
        }
        incrementRecursive(counter+1)
    } catch (error) {
        console.log(error.message, counter)
    }
}
// console.log(incrementRecursive(-5))


//Surround the initial function call in a try/catch block.


//Within the catch, log the error and the value of the counter variable.


//Part 2 - Trampolines
//Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
/**
 * flatten any array of nested arrays
 * @param  {Array} arr The array to flatten
 * @param  {Number} n The number of levels to flatten the array
 * @return {}      
 */
function flattenIt(arr, n){
   try {
    if(n>0){
        let flatArray = arr.flat(n)
        return (flatArray)
    }else{
        throw "Error - stack problems"
    }
    flattenIt(n-1)
   } catch (error) {
    return (error.message)
   }
}
console.log(flattenIt([[1,2,3],[1,2,3],[[4,5,6],[7,8,9]],[10,11,12],[[13,14,15],16,17,18], [19,20,[21, 22, [23], 34]]], 3))

//Once your recursive function is complete, trampoline it.
/**
 * Modified function to flatten any array
 * @param  {Array} arr2 The array to flatten
 * @param  {Number} n The levels to flatten
 * @return {Function}   An anonymous recursive function   
 */
function modifiedFlattenIt(arr2, n, a=1){
    try {
        if(n>0){
            return arr2.flat(n)
        }else{
            throw "Error - I've got problems"
        }
    } catch (error) {
        console.log(error.message)
    }
   return () => modifiedFlattenIt(n-1, a)
}

/**
 * Trampolined function to remove intermediary stack traces
 * @param  {Number} f The modified function
 * @param  {Number} args The rest parameters
 * @return {Function}      The modified recursive function
 */
function trampoline(f, ...args){
    let x = f(...args)
    while(typeof x ==="function"){
        x = x()
    }
    return x
}
console.log(trampoline(modifiedFlattenIt, [[1,2,3],[1,2,3],[[4,5,6],[7,8,9]],[10,11,12],[[13,14,15],16,17,18], [19,20,21]], 2, 1))

//Part 3 - Deferred Execution
//Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
const h1 = document.querySelector("h1")
let text = `
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam sed, saepe accusantium quibusdam incidunt dicta nobis dolore. Repellat nobis vel aliquid facilis eaque debitis unde consequatur porro, consequuntur excepturi voluptates tempore neque necessitatibus ad. Rerum nesciunt aperiam laborum ea expedita commodi, dignissimos, maiores provident quaerat dolorem debitis quisquam facere beatae?</>
`
h1.insertAdjacentHTML("afterend", text);
//Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.
/**
 * Find prime numbers less than any number
 * @param  {Number} n Find all primes less than n
 * @param  {}
 * @return {Boolean}      Return true if prime
 */
function iAmPrime(n){
    let prime = true
    if(n<2){
        prime= false
    }
    for(let i=2; i<n; i++){
        if(n%i===0){
            prime = false
            continue
        }
    }
    return prime
}

for(let i=0; i<10000; i++){
    if(iAmPrime(i)){
        h1.insertAdjacentHTML("afterend", i + " ");
    }
}



//Once complete, use the alert() method to alert the user that the calculation is finished.

alert("I finished finding the Prime numbers")