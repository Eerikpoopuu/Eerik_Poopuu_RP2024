
// const numbersArray = [0,1,2,3,4,5,6,7];
// function ind(numbersArray,num){
//     return numbersArray.indexOf(num);
// }

// console.log(ind,5);


// function add(num1,num2){
//     return num1+num2;
// }
// console.log(add(2,3));



// const addnumbers = (num1,num2) => {return num1+num2};

// console.log(addnumbers(2,3))

// function nested(num1){
//     return function(num2){
//         return num1+ num2;
//     };
// }
// console.log(nested(3)(4));
// const nestedarrow = (num1)=> (num2) => num1 +num2 ;

// console.log(nestedarrow(3)(4))

// const greet = (name) => `Hello ${name}`;

// console.log(greet("EErik"));


// const array = [1,23,4,5,6,7,2,3,6,8];
// const filtered = array.filter(e => e > 4);
// console.log(filtered);



// const names = ["Anne", "Mari", "Kalle", "Tom", "Vaike"];
// const ages = [22, 40, 21, 34, 23];
// const locations = ["Tallinn", "Tartu", "parnu", "narva", "paide"];

// const objNames = names.map((name, index) => ({
//     name: name,
//     age: ages[index],
//     username: name.split("").reverse().join("")
// }));

// console.log(objNames);

let Eerik = {
    Name: "Eerik",
    School : "tlü",

};

Eerik = {...Eerik,Height : "125" }

console.log(Eerik)


