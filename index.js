let x = 2;
let y = 5;

function addTwoNumbers(leftOperand,rightOperand){
    return leftOperand+rightOperand;
}

function addNumbers(numbers,doAfter){
    var sum = 0;
    for(const number of numbers){
        sum += number;
    }
    // for(let i=0; i<numbers.length;i++){
    //     sum += numbers[i]
    // }

    doAfter(sum)    
}

let add2 = (number)=> console.log( number + 2);


const myArray = [
    1,4,2,5,12,12,3,4,2,3,1
] // 49
// const result = addTwoNumbers(x,y)

// const result = addNumbers(myArray);

addNumbers(myArray,(res)=>console.log(res*10));

// const result = add2(5)

// console.log(result)