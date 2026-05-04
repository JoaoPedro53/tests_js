const animes = [
    {name: "Hell's Paradise", eps: 25, temps: 2},
    {name: "Shingeki No Kyojin", eps: 97, temps: 4},
    {name: "One Piece", eps: 1160, temps: 22}
]

function loadAnime(){
    return new Promise((resolve, reject) => {
        console.log("Loading animes...");

        setTimeout(() => {
            const resolveOrReject = true;

            if(resolveOrReject) {
                resolve(animes)
            } else {
                reject("Error!")
            }

        }, 3000)
    })
}

console.log(loadAnime())