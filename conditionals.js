const readline = require("readline-sync");

let number = readline.question("enter a number: ");

result(number);

function result(num) {
    if (num %2 == 0) {
    console.log("É par!")
} else{
    console.log("É impar!")
}
}