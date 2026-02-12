const services = [
{ name: "Technical Interview Mock (IT & Engineering)", score: 0 },
{ name: "Behavioral Interview Coaching", score: 0 },
{ name: "HR Interview Simulation", score: 0 },
{ name: "Case Study Interview Practice", score: 0 },
{ name: "English Fluency Interview Training", score: 0 },
{ name: "Leadership Interview Coaching", score: 0 },
{ name: "STAR Method Training", score: 0 },
{ name: "Executive Level Interview Prep", score: 0 }
];

let comparisons = 0;
const maxComparisons = 15;

function getTwoRandomServices() {
let indexA = Math.floor(Math.random() * services.length);
let indexB;

```
do {
    indexB = Math.floor(Math.random() * services.length);
} while (indexA === indexB);

return [services[indexA], services[indexB]];
```

}

function showComparison() {
if (comparisons >= maxComparisons) {
showResults();
return;
}

```
const [serviceA, serviceB] = getTwoRandomServices();

const buttonA = document.getElementById("optionA");
const buttonB = document.getElementById("optionB");

buttonA.textContent = serviceA.name;
buttonB.textContent = serviceB.name;

buttonA.onclick = () => {
    serviceA.score++;
    comparisons++;
    showComparison();
};

buttonB.onclick = () => {
    serviceB.score++;
    comparisons++;
    showComparison();
};
```

}

function showResults() {
document.getElementById("comparison").classList.add("hidden");
document.getElementById("result").classList.remove("hidden");

```
services.sort((a, b) => b.score - a.score);

const rankingList = document.getElementById("rankingList");
rankingList.innerHTML = "";

services.forEach(service => {
    const li = document.createElement("li");
    li.textContent = service.name + " - Score: " + service.score;
    rankingList.appendChild(li);
});
```

}

function restart() {
services.forEach(service => service.score = 0);
comparisons = 0;

```
document.getElementById("comparison").classList.remove("hidden");
document.getElementById("result").classList.add("hidden");

showComparison();
```

}

showComparison();
