const animes = []
let op = 1;
const readline = require("readline-sync");

while (op != 0) {
    menu()
    op = Number(readline.question("Escolha uma das opcoes: "));

    switch (op) {
  case 1:
    listAll()
    break;
  case 2:
    create()
    break;
  case 3:
    console.log("Delete")
    break;
  case 4:
    console.log("Atulizar")
    break;
  default:
    
 }
}

function create(){
    name = readline.question("Qual o nome do anime? ");
    eps = Number(readline.question("Quantos episodios tem? "));
    temps = Number(readline.question("Quantas temporadas tem? "));

    const anime = {
        name: name,
        eps: eps,
        temps: temps
    }

    animes.push(anime);
    console.log(anime);
}

function listAll(){
    animes.forEach((anime) => {
    console.log(`Anime: ${anime.name}, eps: ${anime.eps}, temps: ${anime.temps}`);
})
}

function menu() {
    console.log("0. Exit")
    console.log("1. Listar animes")
    console.log("2. Criar anime")
    console.log("3. Deletar anime")
    console.log("4. Atualizar anime")
}