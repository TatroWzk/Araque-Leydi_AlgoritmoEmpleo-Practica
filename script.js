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
let totalVotes = 0;

/** Util */
function scoreOf(movie) {
  return movie.comparisons === 0 ? 0 : movie.wins / movie.comparisons;
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove("show"), 1800);
}

/** UI */
function setMovieCard(which, movie) {
  const img = document.getElementById(which === "A" ? "imgA" : "imgB");
  const title = document.getElementById(which === "A" ? "titleA" : "titleB");
  const mini = document.getElementById(which === "A" ? "miniA" : "miniB");
  const scoreEl = document.getElementById(which === "A" ? "scoreA" : "scoreB");

  img.src = movie.image;
  img.alt = `Poster de ${movie.name}`;
  title.textContent = movie.name;
  mini.textContent = `${movie.wins} wins • ${movie.comparisons} comps`;
  scoreEl.textContent = `Score: ${scoreOf(movie).toFixed(2)}`;
}

function getRandomPair() {
  let indexA = Math.floor(Math.random() * movies.length);
  let indexB;

  do {
    indexB = Math.floor(Math.random() * movies.length);
  } while (indexA === indexB);

  currentIndexes = [indexA, indexB];

  setMovieCard("A", movies[indexA]);
  setMovieCard("B", movies[indexB]);
}

function updateHeaderStats() {
  document.getElementById("totalVotes").textContent = totalVotes;
  document.getElementById("movieCount").textContent = movies.length;
}

function updateRanking() {
  const sorted = [...movies].sort((a, b) => scoreOf(b) - scoreOf(a));
  const maxScore = Math.max(...sorted.map(scoreOf), 0.00001);

  const list = document.getElementById("rankingList");
  list.innerHTML = "";

  sorted.forEach((movie, idx) => {
    const score = scoreOf(movie);
    const pct = Math.round((score / maxScore) * 100);

    const li = document.createElement("li");
    li.className = "rank-item";

    li.innerHTML = `
      <div class="badge">${idx + 1}</div>
      <div class="rank-main">
        <div class="rank-title">
          <strong>${movie.name}</strong>
          <span>Score: ${score.toFixed(2)}</span>
        </div>
        <div class="bar" aria-label="Barra de score">
          <i style="width:${pct}%"></i>
        </div>
        <div class="rank-sub">
          <span>Wins: ${movie.wins}</span>
          <span>Comparaciones: ${movie.comparisons}</span>
        </div>
      </div>
    `;

    list.appendChild(li);
  });
}

/** Votar */
function vote(choice) {
  const winnerIndex = currentIndexes[choice];
  const loserIndex = currentIndexes[choice === 0 ? 1 : 0];

  movies[winnerIndex].wins++;
  movies[winnerInde]()

