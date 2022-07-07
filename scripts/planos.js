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
