// EvenNumber in vanilla js

// function evenNumber(n){
//     if(n%2===0){
//         return "Even Number";
//     }else {
//         return "Odd number"
//     }
// }

// console.log(evenNumber(28));

// function evenNumber(n){
//     if(n%2===0){
//         return "Even";
//     }else {
//         return "Odd"
//     }
// }

// console.log(evenNumber(28));

// function evenNumber(n){
//     if(n%2===0){
//         return "Even Number";
//     }else {
//         return "Odd number"
//     }
// }

// console.log(evenNumber(775));

// 2nd formula
// function evenNumber(n){
//     return n%2===0 ? "Even":"Odd";
// }
// console.log(evenNumber(28));
// in ES
const evenNumber = (n) => (n % 2 === 0 ? "Even" : "Odd");

console.log(evenNumber(29));
