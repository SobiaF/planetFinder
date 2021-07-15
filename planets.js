const planets = ["Earth", "Venus", "Mars", "Mercury", "Jupiter", "Uranus", "Neptune"];
const btn = document.getElementById("btn");
const planet = document.querySelector(".planet");

btn.addEventListener("click", function () {
    const randomPlanet = getRandomPlanet();
    console.log(randomPlanet);
    document.body.style.backgroundColor = planets[randomPlanet];
    planet.textContent = planets[randomPlanet];
});

function getRandomPlanet () {
    return Math.floor(Math.random() * planets.length);
}