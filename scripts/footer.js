// create a header
let footer = document.createElement( "footer" );
footer.id = "footer";
footer.classList = "estilo-card"

//make the HTML template to insert inside your header
let footerContent = `
    <hr id="footer-linha">

    <div class="copyright-container">
        <div id="footer-copyright">
            <p>&copy; Bellatrix - Todos os direitos reservados - 2022</p>
        </div>
    </div>

    <div class="item-container">
        <div class="footer-item">
            <i class="footer-icone bi bi-instagram"></i>
            <hr>
        </div>

        <div class="footer-item">
            <i class="footer-icone bi bi-facebook"></i>
            <hr>
        </div>

        <div class="footer-item">
            <i class="footer-icone bi bi-twitter"></i>
            <hr>
        </div>

        <div class="footer-item">
            <i class="footer-icone bi bi-google"></i>
            <hr>
        </div>
    </div>
`;

//insert the footer after everything else
document.querySelector( "body" ).append( footer );

//fill your footer with HTML template
document.querySelector( "body>footer:last-of-type" ).innerHTML = footerContent;
