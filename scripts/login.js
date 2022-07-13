function exibirUsuarioLogado ()
{
    let usuario = inputUsuario.value;
    usuario = usuario.trim().replace( /\s+/, " " );

    if ( !usuario  )
    {
        alert( "Insira um nome de usuário!" );
        return;
    }

    alert( `Usuário ${usuario} logado com sucesso!` );
    window.location.assign( "../pages/inicio.html" );
}

const inputUsuario = document.getElementById( "usuario" );
const buttonEntrar = document.getElementById( "entrar" );
buttonEntrar.addEventListener( "click", exibirUsuarioLogado );
