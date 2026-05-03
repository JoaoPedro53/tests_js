let num = 10;
let name = "joão";
let boolean = true;
const frutas = ["maça", "pera", "uva"];

const pessoa = {
    nome: "João",
    idade: 19,
    cpf: "15153601480"
}

const types = [num, name, boolean, frutas, pessoa]

for(const type of types) {
    console.log(typeof type);
}