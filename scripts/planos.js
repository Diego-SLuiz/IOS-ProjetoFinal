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

// astros
const sun = document.querySelector('#sun');
const mercury = {
    speed: 0.00005,
    theta: Math.random() * Math.PI * 2,
    radius: 100,
    el: document.querySelector('#mercury'),
};

const venus = {
    speed: 0.00005,
    theta: Math.random() * Math.PI * 2,
    radius: 150,
    el: document.querySelector('#venus'),
};

const earth = {
    speed: 0.00005,
    theta: Math.random() * Math.PI * 2,
    radius: 210,
    el: document.querySelector('#earth'),
};

const mars = {
    speed: 0.00005,
    theta: Math.random() * Math.PI * 2,
    radius: 280,
    el: document.querySelector('#mars'),
};

const jupiter = {
    speed: 0.00005,
    theta: Math.random() * Math.PI * 2,
    radius: 340,
    el: document.querySelector('#jupiter'),
};

const saturn = {
    speed: 0.00005,
    theta: Math.random() * Math.PI * 2,
    radius: 450,
    el: document.querySelector('#saturn'),
};

const uranus = {
    speed: 0.00005,
    theta: Math.random() * Math.PI * 2,
    radius: 540,
    el: document.querySelector('#uranus'),
};

const neptune = {
    speed: 0.00005,
    theta: Math.random() * Math.PI * 2,
    radius: 620,
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

// renderiza tudo na página
function render() {
    requestAnimationFrame(render);
    planets.forEach(update);
}
render();
// fim astros
