// astros
const container = document.getElementById('animationContainer');
const sun = document.querySelector('#sun');
const stopAll = 0;
const stopAllRand = 0;
const mercury = {
    speed: 0.0005 * stopAll,
    theta: Math.random() * Math.PI * 2 * stopAllRand,
    radius: 50,
    el: document.querySelector('#mercury'),
};

const venus = {
    speed: 0.0005 * stopAll,
    theta: Math.random() * Math.PI * 2 * stopAllRand,
    radius: 70,
    el: document.querySelector('#venus'),
};

const earth = {
    speed: 0.0005 * stopAll,
    theta: Math.random() * Math.PI * 2 * stopAllRand,
    radius: 90,
    el: document.querySelector('#earth'),
};

const moon = {
    speed: 0.0005 * stopAll,
    theta: earth.theta * stopAll - 0.1,
    radius: 90,
    el: document.querySelector('#moon'),
};

const mars = {
    speed: 0.0005 * stopAll,
    theta: Math.random() * Math.PI * 2 * stopAllRand,
    radius: 110,
    el: document.querySelector('#mars'),
};

const jupiter = {
    speed: 0.0005 * stopAll,
    theta: Math.random() * Math.PI * 2 * stopAllRand,
    radius: 130,
    el: document.querySelector('#jupiter'),
};

const saturn = {
    speed: 0.0005 * stopAll,
    theta: Math.random() * Math.PI * 2 * stopAllRand,
    radius: 180,
    el: document.querySelector('#saturn'),
};

const uranus = {
    speed: 0.0005 * stopAll,
    theta: Math.random() * Math.PI * 2 * stopAllRand,
    radius: 220,
    el: document.querySelector('#uranus'),
};

const neptune = {
    speed: 0.0005 * stopAll,
    theta: Math.random() * Math.PI * 2 * stopAllRand,
    radius: container.clientWidth / 2 - 30,
    el: document.querySelector('#neptune'),
};

const planets = [
    mercury,
    venus,
    earth,
    moon,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
];

// posiciona o sol no centro da tela
var sunX = container.clientWidth / 2 - sun.clientWidth / 2;
var sunY = container.clientHeight / 2 - sun.clientHeight / 2;
sun.style.left = `${sunX}px `;
sun.style.top = `${sunY}px `;

// reposiciona o sol no centro caso o tamahno da tela mude
window.addEventListener('resize', redimensionar);
function redimensionar() {
    sunX = container.clientWidth / 2 - sun.clientWidth / 2;
    sunY = container.clientHeight / 2 - sun.clientHeight / 2;
    sun.style.left = `${sunX}px `;
    sun.style.top = `${sunY}px `;

    neptune.radius = container.clientWidth / 2 - 30;
}

// atualiza a posição dos planetas em volta do sol
function update(planet) {
    planet.theta += planet.speed;
    planet.el.style.left = `${
        Math.cos(planet.theta) * planet.radius + sunX + sun.clientWidth / 2
    }px `;
    planet.el.style.top = `${
        Math.sin(planet.theta) * planet.radius + sunY + sun.clientHeight / 2
    }px `;
}

// renderiza a página
function render() {
    requestAnimationFrame(render);
    planets.forEach(update);
}
render();
// fim astros

// cards
const astros = document.getElementsByClassName('astroAnim');
const todosAstos = [
    'sol',
    'mercurio',
    'venus',
    'terra',
    'lua',
    'marte',
    'asteroid',
    'jupiter',
    'saturno',
    'urano',
    'netuno',
];
var floatingCard;

for (let i = 0; i < astros.length; i++) {
    astros[i].addEventListener('click', card);
}
function card(e) {
    let planetID = `${e.target.id}Container`;
    let planetText;
    let planetTitle;
    let planetTravel;

    if (document.querySelector(`#${planetID}`) != null) {
        resetCard();
    }

    function imgAstro(index) {
        floatingCard = `
        <div class="cardClass">
        <i class="bi bi-x-lg" id="closeCard" onclick="resetCard()"></i>
            <h5 class="cardTitle" id="planetName"></h5>
            <div class="astro" id="${todosAstos[index]}Card"></div>
            <p id="cardText"></p>
            <div class="cardButtons">
                <a class="btn btn-primary" href="../pages/astros.html">Saiba Mais</a>
                <button class="btn btn-outline-light" id="travel" href="./login.html">Viagem</button>
            </div>
        </div>
        `;
        e.target.innerHTML = floatingCard;
        planetText = document.getElementById('cardText');
        planetTitle = document.getElementById('planetName');
        planetTravel = document.getElementById('travel');
    }

    function disableTravel() {
        planetTravel.className += ' disabled';
    }

    switch (e.target.id) {
        case 'sun':
            imgAstro(0);
            planetTitle.innerText = 'Sol';
            planetText.innerText = 'esse é o sol';
            disableTravel();
            break;
        case 'mercury':
            imgAstro(1);
            planetTitle.innerText = 'Mercúrio';
            planetText.innerText = 'esse é mercúrio';
            break;
        case 'venus':
            imgAstro(2);
            planetTitle.innerText = 'Venus';
            planetText.innerText = 'essa é venus';
            break;
        case 'earth':
            imgAstro(3);
            planetTitle.innerText = 'Terra';
            planetText.innerText = 'essa é a terra';
            break;
        case 'moon':
            imgAstro(4);
            planetTitle.innerText = 'Lua';
            planetText.innerText = 'essa é a lua';
            break;
        case 'mars':
            imgAstro(5);
            planetTitle.innerText = 'Marte';
            planetText.innerText = 'esse é marte';
            break;
        case 'asteroid':
            imgAstro(6);
            planetTitle.innerText = 'Cinturão de asteróides';
            planetText.innerText = 'esse é o cinturão de asteróides';
            break;
        case 'jupiter':
            imgAstro(7);
            planetTitle.innerText = 'Jupiter';
            planetText.innerText = 'esse é jupiter';
            disableTravel();
            break;
        case 'saturn':
            imgAstro(8);
            planetTitle.innerText = 'Saturno';
            planetText.innerText = 'esse é saturno';
            disableTravel();
            break;
        case 'uranus':
            imgAstro(9);
            planetTitle.innerText = 'Urano';
            planetText.innerText = 'esse é urano';
            disableTravel();
            break;
        case 'neptune':
            imgAstro(10);
            planetTitle.innerText = 'Netuno';
            planetText.innerText = 'esse é netuno';
            disableTravel();
            break;
    }
}

function resetCard() {
    for (let i = 0; i < astros.length; i++) {
        astros[i].innerHTML = '';
    }
}
// fim cards
