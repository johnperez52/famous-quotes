function aFunction(){
    console.log("a function was run")
    return 1;
}

let functionReference = aFunction

function higherOrderFunction(functionParameter){
    return functionParameter()
}

//console.log(aFunction())
//console.log(functionReference())
console.log(higherOrderFunction(functionReference,5))

let aFunc = function(){
    return Math.random()
}
aFunc()
aFunc = undefined

let arrowFunction = () => Math.random()
console.log(arrowFunction())

let arrowFunction2 = () => ({a:5})
console.log(arrowFunction())

let arrowFunction3 = () => {
    let ranNumber = Math.random();
    return { a: ranNumber }
}
console.log(arrowFunction3())

let arraysValues = [1, 2, 3, 4]
for (let item of arraysValues){
    console.log(item)
}

arraysValues.forEach((item) => console.log(item))
let sum= arraysValues.reduce((previousValue,currentValue)=> previousValue + currentValue)
console.log("the sum is " + sum)


let arrays = [[1, 2, 3], [4, 5], [6]];
export function flattening (list){
    return list.reduce((previousValue, currentValue)=>previousValue.concat(currentValue))
}
console.log(flattening(arrays))

export function loop(value,test,update,body){
    for (let curValue=value; test(curValue); curValue=update(curValue)){
        body(curValue)
    }
}
loop(3, n => n > 0, n => n - 1, console.log);

loop(0, n => n < 3, n => n + 1, console.log);




function everyLoop(array, test) 
{
  // Your code here.
  let returnValue = true
  for(let item of array){
      returnValue = returnValue && test(item)
  }
  return returnValue
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true



function everySome(array, test) 
{
// Your code here.
return !array.some(item=>{
    console.log("applying the test to" + item + "with result" +test(item))
    if(!test(item)){
        console.log("I found an item that doesn't meet the test!")
    }
    return !test(item)
})
} 


console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true


