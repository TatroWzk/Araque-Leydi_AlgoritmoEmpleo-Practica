const movies = [
{ name: "La lista de Schindler", wins: 0, comparisons: 0 },
{ name: "El discurso del rey", wins: 0, comparisons: 0 },
{ name: "Una mente brillante", wins: 0, comparisons: 0 },
{ name: "12 años de esclavitud", wins: 0, comparisons: 0 },
{ name: "Interestelar", wins: 0, comparisons: 0 },
{ name: "El club de los poetas muertos", wins: 0, comparisons: 0 }
];

let currentPair = [];

function getRandomPair() {
let indexA = Math.floor(Math.random() * movies.length);
let indexB;

```
do {
    indexB = Math.floor(Math.random() * movies.length);
} while (indexA === indexB);

currentPair = [indexA, indexB];

document.getElementById("movieA").innerText = movies[indexA].name;
document.getElementById("movieB").innerText = movies[indexB].name;
```

}

function vote(selectedIndex) {
let winner = movies[selectedIndex];
let loserIndex = currentPair[0] === selectedIndex ? currentPair[1] : currentPair[0];
let loser = movies[loserIndex];

```
winner.wins++;
winner.comparisons++;
loser.comparisons++;

updateRanking();
getRandomPair();
```

}

function updateRanking() {
let sortedMovies = [...movies].sort((a, b) => {
let scoreA = a.comparisons === 0 ? 0 : a.wins / a.comparisons;
let scoreB = b.comparisons === 0 ? 0 : b.wins / b.comparisons;
return scoreB - scoreA;
});

```
let rankingList = document.getElementById("rankingList");
rankingList.innerHTML = "";

sortedMovies.forEach(movie => {
    let score = movie.comparisons === 0 ? 0 : (movie.wins / movie.comparisons).toFixed(2);
    let li = document.createElement("li");
    li.textContent = `${movie.name} - Score: ${score}`;
    rankingList.appendChild(li);
});
```

}

document.getElementById("movieA").addEventListener("click", () => vote(currentPair[0]));
document.getElementById("movieB").addEventListener("click", () => vote(currentPair[1]));

getRandomPair();

