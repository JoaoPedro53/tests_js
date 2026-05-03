let num1 = 10;
let num2 = 2;

const sum = num1 + num2;
const div = num1 / num2;
const mult = num1 * num2;
const sub = num1 - num2;

const results = [sum, div, mult, sub]

for(const result of results){
    console.log(result)
}