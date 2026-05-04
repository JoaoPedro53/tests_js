const animes = [
    {name: "Hell's Paradise", eps: 25, temps: 2},
    {name: "Shingeki No Kyojin", eps: 97, temps: 4},
    {name: "One Piece", eps: 1160, temps: 22}
]

animes.forEach((anime) => {
    console.log(`Anime: ${anime.name}, eps: ${anime.eps}, temps: ${anime.temps}`);
})

// Find -> return the first found
const anime = animes.find((anime) => {
    return anime.eps > 1000
})

// Filter -> return all found
const animesFilters = animes.filter((anime) => {
    return anime.eps > 10
})

// findIndex -> return the index
const animeByIndex = animes.findIndex((anime) => {
    return anime.name == "One Piece"
})

// Map -> list with all animes
const animesMap = animes.map((anime) => {
    return anime;
})

// Some -> at least one
const animeSome = animes.some((anime) => {
    return anime.name == "One Piece"
})

// Every -> all
const animeEvery = animes.every((anime) => {
    return anime.eps === 20;
})

// Reduce -> reduce
const animesSumAllEps = animes.reduce((epsTotal, anime) => {
    return epsTotal += anime.eps
}, 0)

console.log(anime)
console.log(animesFilters)
console.log(animeByIndex)
console.log(animesMap)
console.log(animes.reverse())
console.log(animeSome)
console.log(animeEvery)
console.log(animesSumAllEps)