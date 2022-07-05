const formulario = document.getElementById('formContainer');
const submitBtn = document.getElementById('enviar');

function openForm() {
    document.getElementById('formContainer').className = 'show';
    document.body.style.overflow = 'hidden';
    document.body.scroll = 'no';
}

formulario.addEventListener('click', function (e) {
    if (e.target == this) closeForm();
});
function closeForm(e) {
    document.getElementById('formContainer').classList.remove('show');
    document.body.style.overflow = 'auto';
    document.body.scroll = 'yes';
}

submitBtn.addEventListener('click', formDone);
function formDone(e) {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let sobreNome = document.getElementById('sobreNome').value;
    let eMail = document.getElementById('e-mail').value;
    let idade = document.getElementById('aniversario').value;

    console.log(nome, sobreNome, eMail, idade);
}
