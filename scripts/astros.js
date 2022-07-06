// Atualizar informações de cada astro ----------------------------------------
function atualizarInformacoesAstro ( event )
{
    let botaoProximo = event.target.classList.contains( "carousel-control-next-icon" );
    let valorIncremento = botaoProximo ? 1 : -1;

    indiceAtual += valorIncremento;
    console.log( indiceAtual );

    return
    astroNome.innerText = listaAstroInformacoes[ indiceAtual ].nome;
    astroDescricao.innerText = listaAstroInformacoes[ indiceAtual ].descricao;
    astroNome.tamanho = listaAstroInformacoes[ indiceAtual ].tamanho;
    astroNome.temperatura = listaAstroInformacoes[ indiceAtual ].temperatura;
    astroNome.gravidade = listaAstroInformacoes[ indiceAtual ].gravidade;

}

const listaAstroInformacoes =
[
    {
        nome: "Terra",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quo doloremque labore, doloribus illum molestiae natus dignissimos impedit. Ut laborum consequatur aut ipsum. Consequatur eveniet officia adipisci, possimus fugiat nisi.",
        tamanho: "0000",
        temperatura: "0000",
        gravidade: "0000",
    },
    {
        nome: "Lua",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quo doloremque labore, doloribus illum molestiae natus dignissimos impedit. Ut laborum consequatur aut ipsum. Consequatur eveniet officia adipisci, possimus fugiat nisi.",
        tamanho: "0000",
        temperatura: "0000",
        gravidade: "0000",
    },
    {
        nome: "Marte",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quo doloremque labore, doloribus illum molestiae natus dignissimos impedit. Ut laborum consequatur aut ipsum. Consequatur eveniet officia adipisci, possimus fugiat nisi.",
        tamanho: "0000",
        temperatura: "0000",
        gravidade: "0000",
    },
]

const astroNome = document.getElementById( "astro-nome" );
const astroDescricao = document.getElementById( "astro-descricao" );
const astroTamanho = document.getElementById( "astro-tamanho" );
const astroTemperatura = document.getElementById( "astro-temperatura" );
const astroGravidade = document.getElementById( "astro-gravidade" );

const botaoProximo = document.getElementById( "astro-proximo" );
botaoProximo.addEventListener( "click", atualizarInformacoesAstro );

const botaoAnterior = document.getElementById( "astro-anterior" );
botaoAnterior.addEventListener( "click", atualizarInformacoesAstro );

let totalAstros = document.getElementsByClassName( "astro" ).length;
let indiceAtual = 0;
console.log( indiceAtual )
console.log( totalAstros )
