function exibirUsuarioCriado ()
{
    let usuario = inputUsuario.value;
    usuario = usuario.trim().replace( /\s+/, " " );

    if ( !usuario  )
    {
        alert( "Insira um nome de usuário!" );
        return;
    }

    alert( `Usuário ${usuario} registrado com sucesso!` );
    window.location.assign( "../pages/login.html" );
}

const inputUsuario = document.getElementById( "usuario" );
const buttonEntrar = document.getElementById( "enviar" );
buttonEntrar.addEventListener( "click", exibirUsuarioCriado );
