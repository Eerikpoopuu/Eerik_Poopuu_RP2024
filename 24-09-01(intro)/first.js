
const numbersArray = [0,1,2,3,4,5,6,7];
function ind(numbersArray,num){
    return numbersArray.indexOf(num);
}

console.log(ind,5);


function add(num1,num2){
    return num1+num2;
}
console.log(add(2,3));



const addnumbers = (num1,num2) => {return num1+num2};

console.log(addnumbers(2,3))

function nested(num1){
    return function(num2){
        return num1+ num2;
    };
}
console.log(nested(3)(4));
const nestedarrow = (num1)=> (num2) => num1 +num2 ;

console.log(nestedarrow(3)(4))
