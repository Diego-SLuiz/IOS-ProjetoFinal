// create a header
let footer = document.createElement( "footer" );
footer.id = "footer";
footer.classList.add( "estilo-card" );

//make the HTML template to insert inside your header
let footerContent = `
    <hr id="footer-linha">

    <div class="copyright-container">
        <div id="footer-copyright">
            <p class="fs-5">&copy; Bellatrix - Todos os direitos reservados - 2022</p>
        </div>
    </div>

    <div class="item-container">
        <a href="https://www.instagram.com/" target="_blank" class="footer-item">
            <i target="_blank" class="footer-icone bi bi-instagram fs-5"></i>
        </a>

        <a href="https://www.facebook.com/" target="_blank" class="footer-item">
            <i target="_blank" class="footer-icone bi bi-facebook fs-5"></i>
        </a>

        <a href="https://www.twitter.com/" target="_blank" class="footer-item">
            <i target="_blank" class="footer-icone bi bi-twitter fs-5"></i>
        </a>

        <a href="https://www.gmail.com/" target="_blank" class="footer-item">
            <i target="_blank" class="footer-icone bi bi-google fs-5"></i>
        </a>
    </div>
`;

//insert the footer after everything else
document.querySelector( "body" ).append( footer );

//fill your footer with HTML template
document.querySelector( "body>footer:last-of-type" ).innerHTML = footerContent;
