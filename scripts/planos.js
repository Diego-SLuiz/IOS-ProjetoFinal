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
    radius: 140,
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
    radius: 210,
    el: document.querySelector('#uranus'),
};

const neptune = {
    speed: 0.0005 * stopAll,
    theta: Math.random() * Math.PI * 2 * stopAllRand,
    radius: 240,
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
}

// atualiza a posição dos planetas em volta do sol
function update(planet) {
    planet.theta += planet.speed;
    planet.el.style.left = `${
        Math.cos(planet.theta) * planet.radius +
        sunX +
        sun.clientWidth / 2 -
        planet.el.clientWidth / 2
    }px `;
    planet.el.style.top = `${
        Math.sin(planet.theta) * planet.radius +
        sunY +
        sun.clientHeight / 2 -
        planet.el.clientHeight / 2
    }px `;
}
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
let cardClass;

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
            <h5 class="cardTitle mb-4" id="planetName"></h5>
            <div class="astro" id="${todosAstos[index]}Card"></div>
            <p class="mt-4" id="cardText"></p>
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

    // verifica a posição do card baseado na div
    function getOffset(el) {
        var x = 0;
        var y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            x += el.offsetLeft - el.scrollLeft;
            y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: y, left: x };
    }

    function cardPositionFix() {
        let x, y;
        cardClass = document.getElementsByClassName('cardClass')[0];

        if (getOffset(cardClass).top <= container.clientHeight / 2) {
            y = 'acima';
        } else if (getOffset(cardClass).top > container.clientHeight / 2) {
            y = 'abaixo';
        } else {
            y = 'centro';
        }

        if (getOffset(cardClass).left <= container.clientWidth / 2) {
            x = 'esquerda';
        } else if (getOffset(cardClass).left > container.clientWidth / 2) {
            x = 'direita';
        } else {
            x = 'centro';
        }

        console.log(
            getOffset(cardClass).top,
            getOffset(cardClass).left,
            container.clientHeight / 2,
            container.clientWidth / 2
        );
        console.log(x, y);
    }

    switch (e.target.id) {
        case 'sun':
            imgAstro(0);
            planetTitle.innerText = 'Sol';
            planetText.innerText =
                'A estrela anã amarela que abriga e aquece todo o sistema solar.';
            disableTravel();
            cardPositionFix();
            break;
        case 'mercury':
            imgAstro(1);
            planetTitle.innerText = 'Mercurio';
            planetText.innerText =
                'O planeta mais próximo do Sol. Curiozamente, ainda perde para vênus em temperatura média.';
            cardPositionFix();
            break;
        case 'venus':
            imgAstro(2);
            planetTitle.innerText = 'Venus';
            planetText.innerText =
                'O planeta mais quente do sistema solar, com temperatura média de 462°C. Isso ocorre por causa de um efeito estufa descontrolado.';
            cardPositionFix();
            break;
        case 'earth':
            imgAstro(3);
            planetTitle.innerText = 'Terra';
            planetText.innerText =
                '"O ponto azul" que é nossa casa neste universo. Até onde sabemos é o único planeta com vida que existe.';
            cardPositionFix();
            break;
        case 'moon':
            imgAstro(4);
            planetTitle.innerText = 'Lua';
            planetText.innerText =
                'O único satélite da terra. Foi o primeiro passo para a exploração espacial durante a guerra fria em 1995.';
            cardPositionFix();
            break;
        case 'mars':
            imgAstro(5);
            planetTitle.innerText = 'Marte';
            planetText.innerText =
                'Lar do maior vulcão do sistema solar, o Monte Olimpo. Muitas agências estão buscando maneiras de colonizar "O planeta vermelho".';
            cardPositionFix();
            break;
        case 'asteroid':
            imgAstro(6);
            planetTitle.innerText = 'Cinturão de asteróides';
            planetText.innerText = 'esse é o cinturão de asteróides.';
            break;
        case 'jupiter':
            imgAstro(7);
            planetTitle.innerText = 'Jupiter';
            planetText.innerText =
                'O maior planeta do sistema solar. É conhecido principalmente pela sua "Grande Mancha Vermelha", uma tempestade com um diâmetro de quase 3 Terras, que tem durado a provavelmente entre 191 a 357 anos.';
            disableTravel();
            cardPositionFix();
            break;
        case 'saturn':
            imgAstro(8);
            planetTitle.innerText = 'Saturno';
            planetText.innerText =
                'O segundo maior planeta do sistema Solar conhecido pelos seus icônicos anéis, feitos principalmente de gelo de água.';
            disableTravel();
            cardPositionFix();
            break;
        case 'uranus':
            imgAstro(9);
            planetTitle.innerText = 'Urano';
            planetText.innerText =
                'O sétimo planeta a partir do Sol possui um eixo de rotação peculiar. A direção de seus polos estão quase completamente virados, dando seus anéis e satélites naturais uma configuração única.';
            disableTravel();
            cardPositionFix();
            break;
        case 'neptune':
            imgAstro(10);
            planetTitle.innerText = 'Netuno';
            planetText.innerText =
                'Sua "Grande Mancha Escura" é similar à de júpiter, porêm menor. O interior dela é relativamente livre de nuvens, e diferente de Júpiter, cuja mancha sobrevive por centenas de anos, a de Netuno aparenta ser muito breve, formando-se e dissipando-se em poucos anos.';
            disableTravel();
            cardPositionFix();
            break;
    }
}

function resetCard() {
    for (let i = 0; i < astros.length; i++) {
        astros[i].innerHTML = '';
    }
}
// fim cards

// renderiza a página
function render() {
    requestAnimationFrame(render);
    planets.forEach(update);
}
render();
