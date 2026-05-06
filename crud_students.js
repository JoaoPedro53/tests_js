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
    delet()
    break;
  case 4:
    update()
    break;
  default:
    
 }
}

function create(){
    const name = readline.question("Qual o nome do anime? ");
    const eps = readline.question("Quantos episodios tem? ");
    const temps = readline.question("Quantas temporadas tem? ");

    const anime = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        eps: eps,
        temps: temps
    }

    animes.push(anime);
    console.log(anime);
}

function listAll(){
    animes.forEach((anime) => {
    console.log(`${anime.id} | ${anime.name}, eps: ${anime.eps}, temps: ${anime.temps}`);
})
}

function delet(){
  let id = Number(readline.question("Qual o id do anime que deseja deletar? "));
  const indexAnimeToDelete = findById(id)

  if(indexAnimeToDelete > -1){
    animes.splice(indexAnimeToDelete, 1)
  } else {
    console.log("Anime not found!")
  }
    
}

function update(){
  let id = Number(readline.question("Qual o id do anime que deseja atualizar? "));
  const indexAnimeToUpdate = findById(id)

  if(indexAnimeToUpdate > -1){

    let newName = readline.question("Nome, vazio mantem o mesmo: ");
    const eps = readline.question("Episodios, vazio mantem o mesmo: ");
    const temps = readline.question("Temporadas, vazio mantem o mesmo: ");

    newName = newName === "" ? animes[indexAnimeToUpdate].name : newName;

    const newEps = eps === "" ? animes[indexAnimeToUpdate].eps : eps;
    const newTemps = temps === "" ? animes[indexAnimeToUpdate].temps : temps;

    const anime = {
        id: animes[indexAnimeToUpdate].id,
        name: newName,
        eps: newEps,
        temps: newTemps
    }

    animes[indexAnimeToUpdate] = anime;

  } else {
    console.log("Anime not found!")
  }
  
}

function findById(id){
  return indexAnimeToDelete = animes.findIndex(anime => anime.id == id);
}

function menu() {
    console.log("0. Exit")
    console.log("1. Listar animes")
    console.log("2. Criar anime")
    console.log("3. Deletar anime")
    console.log("4. Atualizar anime")
}