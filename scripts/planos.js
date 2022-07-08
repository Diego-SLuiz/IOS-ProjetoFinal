const formulario = document.getElementById('formContainer');
const submitBtn = document.getElementById('enviar');
const conteudo = document.getElementById('conteudo');

// evento do botão de abrir modal
function openForm() {
    escreverInfo();
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

// escreve as informações do planeta clicado
function escreverInfo() {
    let infoTexto = document.getElementById('planetaInfo');
    let infoImg = document.getElementById('planeta');

    let imgTeste = `
        <img src="../assets/images/terra.jpg">
    `;

    let textoTeste = `
        <h3 class="nomePlaneta">Planeta</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam asperiores rerum sunt! Praesentium labore inventore recusandae, tempore aspernatur pariatur nostrum necessitatibus itaque illum sapiente dicta eveniet officia tempora. Excepturi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam asperiores rerum sunt! Praesentium labore inventore recusandae, tempore aspernatur pariatur nostrum necessitatibus itaque illum sapiente dicta eveniet officia tempora. Excepturi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam asperiores rerum sunt! Praesentium labore inventore recusandae, tempore aspernatur pariatur nostrum necessitatibus itaque illum sapiente dicta eveniet officia tempora. Excepturi.</p>
    `;

    infoImg.innerHTML = imgTeste;
    infoTexto.innerHTML = textoTeste;
}
// fim modal

// cards
const astros = document.getElementsByClassName('astro');
var lasClickID;
const floatingCard = `
    <div class="card cardContainer">
        <img class="card-img-top" src="../assets/images/terra.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text" id="cardText"></p>
            <a href="#" class="btn btn-light">Go somewhere</a>
        </div>
    </div>
`;

for (let i = 0; i < astros.length; i++) {
    astros[i].addEventListener('click', card);
}
function card(e) {
    e.target.innerHTML = floatingCard;
    lasClickID = e.target.id;

    switch (e.target.id) {
        case 'sun':
            document.getElementById('cardText').innerHTML = 'Esse é o Sol!';
            break;
        case 'mercury':
            document.getElementById('cardText').innerHTML = 'Esse é Mercúrio!';
            break;
        case 'venus':
            document.getElementById('cardText').innerHTML = 'Esse é Venus!';
            break;
        case 'earth':
            document.getElementById('cardText').innerHTML = 'Essa é Terra!';
            break;
        case 'mars':
            document.getElementById('cardText').innerHTML = 'Esse é Marte!';
            break;
        case 'asteroid':
            document.getElementById('cardText').innerHTML =
                'Esse é o cinturão de asteróides!';
            break;
        case 'jupiter':
            document.getElementById('cardText').innerHTML = 'Esse é Jupiter!';
            break;
        case 'saturn':
            document.getElementById('cardText').innerHTML = 'Esse é Saturno!';
            break;
        case 'uranus':
            document.getElementById('cardText').innerHTML = 'Esse é Urano!';
            break;
        case 'neptune':
            document.getElementById('cardText').innerHTML = 'Esse é Netuno!';
            break;
    }
}
// fim cards

// astros
const sun = document.querySelector('#sun');
const mercury = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 70,
    el: document.querySelector('#mercury'),
};

const venus = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 110,
    el: document.querySelector('#venus'),
};

const earth = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 150,
    el: document.querySelector('#earth'),
};

const mars = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 190,
    el: document.querySelector('#mars'),
};

const jupiter = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 230,
    el: document.querySelector('#jupiter'),
};

const saturn = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 270,
    el: document.querySelector('#saturn'),
};

const uranus = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 310,
    el: document.querySelector('#uranus'),
};

const neptune = {
    speed: 0.0,
    theta: Math.random() * Math.PI * 2 * 0,
    radius: 350,
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
