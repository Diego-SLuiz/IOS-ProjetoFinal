const formulario = document.getElementById('formContainer');
const submitBtn = document.getElementById('enviar');

// evento do botão de abrir modal
function openForm() {
    escreverInfo();
    document.getElementById('formContainer').className = 'show';
    document.body.style.overflow = 'hidden';
    document.body.scroll = 'no';
}

// evnto do botão de fechar modal
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
    let eMail = document.getElementById('e-mail').value;
    let idade = document.getElementById('data').value;

    console.log(nome, sobreNome, eMail, idade);
}

// escreve as informações do planeta clicado
function escreverInfo() {
    let infoTexto = document.getElementById('planetaInfo');
    let infoImg = document.getElementById('planeta');

    let imgTeste = `
        <img src="../assets/images/fundo-astros.jpg">
    `;

    let textoTeste = `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam asperiores rerum sunt! Praesentium labore inventore recusandae, tempore aspernatur pariatur nostrum necessitatibus itaque illum sapiente dicta eveniet officia tempora. Excepturi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam asperiores rerum sunt! Praesentium labore inventore recusandae, tempore aspernatur pariatur nostrum necessitatibus itaque illum sapiente dicta eveniet officia tempora. Excepturi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam asperiores rerum sunt! Praesentium labore inventore recusandae, tempore aspernatur pariatur nostrum necessitatibus itaque illum sapiente dicta eveniet officia tempora. Excepturi.</p>
    `;

    infoImg.innerHTML = imgTeste;
    infoTexto.innerHTML = textoTeste;
}
