class Hero {
  #powerCount = 10;

  constructor(name) {
    this.name = name;
  }

  getCurrentPowerCount() {
    return this.#powerCount;
  }

  train() {
    this.#powerCount++;
  }
}

const heroes = [];

let hero = createHero("hulk");
let geralt = createHero("geralt");
let spiderman = createHero("spider");

heroes.push(hero);
heroes.push(geralt);
heroes.push(spiderman);

function createHero(name) {
  return new Hero(name);
}

const printHallOfFame = () => {
  const heroesContainer = document.querySelector("div");

  heroes.map((hero) => {
    const heroElement = document.createElement("div");

    heroElement.innerHTML = `<p>${
      hero.name
    }, ${hero.getCurrentPowerCount()}</p>`;
    // I create a separate button for each hero
    const button = document.createElement("button");
    button.textContent = "Power up hero";
    button.onclick = () => {
      hero.train();
      heroElement.innerHTML = `<p>${
        hero.name
      }, ${hero.getCurrentPowerCount()}</p>`;
    };

    heroesContainer.append(heroElement);
    heroesContainer.append(button);
    document.getElementById("numberOfHeroes").innerHTML = heroes.length;
  });
};

printHallOfFame();
