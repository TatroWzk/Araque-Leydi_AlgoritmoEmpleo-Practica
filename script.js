const movies = [
{
name: "La lista de Schindler",
image: "https://m.media-amazon.com/images/I/51NiGlapXlL.*AC*.jpg",
wins: 0,
comparisons: 0
},
{
name: "Una mente brillante",
image: "https://m.media-amazon.com/images/I/41qS6e8F1BL.*AC*.jpg",
wins: 0,
comparisons: 0
},
{
name: "El club de los poetas muertos",
image: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL.*AC*.jpg",
wins: 0,
comparisons: 0
},
{
name: "Interestelar",
image: "https://m.media-amazon.com/images/I/71n58W0b7BL.*AC_SL1024*.jpg",
wins: 0,
comparisons: 0
}
];

let currentIndexes = [];

function getRandomPair() {
let indexA = Math.floor(Math.random() * movies.length);
let indexB;

```
do {
    indexB = Math.floor(Math.random() * movies.length);
} while (indexA === indexB);

currentIndexes = [indexA, indexB];

document.getElementById("imgA").src = movies[indexA].image;
document.getElementById("titleA").innerText = movies[indexA].name;

document.getElementById("imgB").src = movies[indexB].image;
document.getElementById("titleB").innerText = movies[indexB].name;
```

}

function vote(choice) {
let winnerIndex = currentIndexes[choice];
let loserIndex = currentIndexes[choice === 0 ? 1 : 0];

```
movies[winnerIndex].wins++;
movies[winnerIndex].comparisons++;
movies[loserIndex].comparisons++;

updateRanking();
getRandomPair();
```

}

function updateRanking() {
let sorted = [...movies].sort((a, b) => {
let scoreA = a.comparisons === 0 ? 0 : a.wins / a.comparisons;
let scoreB = b.comparisons === 0 ? 0 : b.wins / b.comparisons;
return scoreB - scoreA;
});

```
const list = document.getElementById("rankingList");
list.innerHTML = "";

sorted.forEach(movie => {
    let score = movie.comparisons === 0 ? 0 : (movie.wins / movie.comparisons).toFixed(2);
    let li = document.createElement("li");
    li.textContent = `${movie.name} — Score de Aprendizaje: ${score}`;
    list.appendChild(li);
});
```

}

getRandomPair();
updateRanking();
