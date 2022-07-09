const formulario = document.getElementById('formContainer');
const submitBtn = document.getElementById('enviar');
const conteudo = document.getElementById('conteudo');

// evento do botão de abrir modal
function openForm() {
    document.getElementById('formContainer').className = 'show';
    document.body.style.overflow = 'hidden';
    document.body.scroll = 'no';
    conteudo.scrollTo(0, 0);
}

// evento do botão de fechar modal
formulario.addEventListener('click', function (e) {
    if (e.target == this) closeForm();
});
function closeForm() {
    document.getElementById('formContainer').classList.remove('show');
    document.body.style.overflow = 'auto';
    document.body.scroll = 'yes';
}

// evento do botão de enviar
submitBtn.addEventListener('click', formDone);
function formDone(e) {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let sobreNome = document.getElementById('sobreNome').value;
    let usuario = document.getElementById('usuario').value;
    let eMail = document.getElementById('e-mail').value;
    let senha = document.getElementById('senha').value;
    let idade = document.getElementById('data').value;

    console.log(nome, sobreNome, usuario, eMail, senha, idade);
}
// fim modal

// astros
const sun = document.querySelector('#sun');
const mercury = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 50,
    el: document.querySelector('#mercury'),
};

const venus = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 70,
    el: document.querySelector('#venus'),
};

const earth = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 90,
    el: document.querySelector('#earth'),
};

const mars = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 110,
    el: document.querySelector('#mars'),
};

const jupiter = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 130,
    el: document.querySelector('#jupiter'),
};

const saturn = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 180,
    el: document.querySelector('#saturn'),
};

const uranus = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 220,
    el: document.querySelector('#uranus'),
};

const neptune = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 250,
    el: document.querySelector('#neptune'),
};

const planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

// posiciona o sol no centro da tela
var sunX = window.innerWidth / 2 - sun.clientWidth / 2;
var sunY = window.innerHeight / 2 - sun.clientHeight / 2;
sun.style.left = `${sunX}px `;
sun.style.top = `${sunY}px `;

// reposiciona o sol no centro caso o tamahno da tela mude
window.addEventListener('resize', redimensionar);
function redimensionar() {
    sunX = window.innerWidth / 2 - sun.clientWidth / 2;
    sunY = window.innerHeight / 2 - sun.clientHeight / 2;
    sun.style.left = `${sunX}px `;
    sun.style.top = `${sunY}px `;
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
const astros = document.getElementsByClassName('astro');
const todosAstos = [
    'Sol',
    'Mercurio',
    'Venus',
    'Terra',
    'Marte',
    'Asteroid',
    'Jupiter',
    'Saturno',
    'Urano',
    'Netuno',
];
var floatingCard;

for (let i = 0; i < astros.length; i++) {
    astros[i].addEventListener('click', card);
}
function card(e) {
    let planetID = `${e.target.id}Container`;

    if (document.querySelector(`#${planetID}`) != null) {
        resetCard();
    }

    function imgAstro(img) {
        floatingCard = `
            <div class="card interactiveCardContainer">
            <i class="bi bi-x-lg" onclick="resetCard()" id="closeForm"></i>
                <img src="../assets/images/planetas/${todosAstos[img]}.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title" id="planetName"></h5>
                    <p class="card-text"  id="cardText"></p>
                </div>
                <div class="card-body">
                    <button type="button" class="btn btn-primary btn-sm">Saiba mais</button>
                    <button type="button" class="btn btn-secondary btn-sm" disabled>Viagem Impossivel</button>
                </div>
            </div>
        `;
        e.target.innerHTML = floatingCard;
    }

    switch (e.target.id) {
        case 'sun':
            imgAstro(0);
            document.getElementById('planetName').innerHTML = 'Sol';
            document.getElementById('cardText').innerHTML =
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae sunt incidunt beatae eum delectus, voluptate esse sequi sed officia vero corporis inventore blanditiis quod animi corrupti quibusdam. Omnis, ut?';
            break;
        case 'mercury':
            imgAstro(1);
            document.getElementById('planetName').innerHTML = 'Mercúrio';
            document.getElementById('cardText').innerHTML =
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae sunt incidunt beatae eum delectus, voluptate esse sequi sed officia vero corporis inventore blanditiis quod animi corrupti quibusdam. Omnis, ut?';
            break;
        case 'venus':
            imgAstro(2);
            document.getElementById('planetName').innerHTML = 'Venus';
            document.getElementById('cardText').innerHTML =
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae sunt incidunt beatae eum delectus, voluptate esse sequi sed officia vero corporis inventore blanditiis quod animi corrupti quibusdam. Omnis, ut?';
            break;
        case 'earth':
            imgAstro(3);
            document.getElementById('planetName').innerHTML = 'Terra';
            document.getElementById('cardText').innerHTML =
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae sunt incidunt beatae eum delectus, voluptate esse sequi sed officia vero corporis inventore blanditiis quod animi corrupti quibusdam. Omnis, ut?';
            break;
        case 'mars':
            imgAstro(4);
            document.getElementById('planetName').innerHTML = 'Marte';
            document.getElementById('cardText').innerHTML =
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae sunt incidunt beatae eum delectus, voluptate esse sequi sed officia vero corporis inventore blanditiis quod animi corrupti quibusdam. Omnis, ut?';
            break;
        case 'asteroid':
            imgAstro(5);
            document.getElementById('planetName').innerHTML =
                'Cinturão de asteróides!';
            document.getElementById('cardText').innerHTML =
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae sunt incidunt beatae eum delectus, voluptate esse sequi sed officia vero corporis inventore blanditiis quod animi corrupti quibusdam. Omnis, ut?';
            break;
        case 'jupiter':
            imgAstro(6);
            document.getElementById('planetName').innerHTML = 'Jupiter';
            document.getElementById('cardText').innerHTML =
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae sunt incidunt beatae eum delectus, voluptate esse sequi sed officia vero corporis inventore blanditiis quod animi corrupti quibusdam. Omnis, ut?';
            break;
        case 'saturn':
            imgAstro(7);
            document.getElementById('planetName').innerHTML = 'Saturno';
            document.getElementById('cardText').innerHTML =
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae sunt incidunt beatae eum delectus, voluptate esse sequi sed officia vero corporis inventore blanditiis quod animi corrupti quibusdam. Omnis, ut?';
            break;
        case 'uranus':
            imgAstro(8);
            document.getElementById('planetName').innerHTML = 'Urano';
            document.getElementById('cardText').innerHTML =
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae sunt incidunt beatae eum delectus, voluptate esse sequi sed officia vero corporis inventore blanditiis quod animi corrupti quibusdam. Omnis, ut?';
            break;
        case 'neptune':
            imgAstro(9);
            document.getElementById('planetName').innerHTML = 'Netuno';
            document.getElementById('cardText').innerHTML =
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae sunt incidunt beatae eum delectus, voluptate esse sequi sed officia vero corporis inventore blanditiis quod animi corrupti quibusdam. Omnis, ut?';
            break;
    }
}

function resetCard() {
    for (let i = 0; i < astros.length; i++) {
        astros[i].innerHTML = '';
        document.getElementsByClassName('interactiveCardContainer').remove;
    }
}
// fim cards
