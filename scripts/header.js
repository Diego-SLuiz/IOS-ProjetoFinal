// create a header
let header = document.createElement('header');

//make the HTML template to insert inside your header
let headerContent = `
    <nav id="menu-container" class="navbar navbar-expand-lg justify-content-between ">
    <a href="">
        <img src="../assets/images/titulo-desktop.png" alt="Título Desktop" id="menu-imagem-desktop" class="d-none d-sm-inline" >
        <img src="../assets/images/titulo-mobile.png" alt="Título Mobile" id="menu-imagem-mobile" class="d-inline d-sm-none" >
    </a>
        
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu-navegacao"
            aria-controls="menu-navegacao"
            aria-expanded="false"
            aria-label="Ativar navegação">
            <i class="bi bi-list" style="color: white"></i>
        </button>

        <div id="menu-navegacao" class="collapse navbar-collapse navbar-nav justify-content-lg-center">
        
            <a href="" class="menu-item nav-item hover menu-ativo"><span class="menu-numero">00</span>Início</a>
            <a href="" class="menu-item nav-item hover "><span class="menu-numero">01</span>Curiosidades</a>
            <a href="" class="menu-item nav-item hover "><span class="menu-numero">02</span>Destinos</a>
            <a href="" class="menu-item nav-item hover "><span class="menu-numero">03</span>Sobre</a>
        
        </div>
    </nav>
`;

//insert the header right before anything else
document.querySelector('body').prepend(header);

// fill your header with HTML template
document.querySelector('body>header:first-of-type').innerHTML = headerContent;
