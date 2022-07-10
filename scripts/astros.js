function proximoAstro ()
{
    indiceAtual += 1;
    indiceAtual = indiceAtual > totalAstros - 1 ? 0 : indiceAtual;
    atualizarInformacoes();
}

function astroAnterior ()
{
    indiceAtual -= 1;
    indiceAtual = indiceAtual < 0 ? totalAstros - 1 : indiceAtual;
    atualizarInformacoes();
}

function atualizarInformacoes ()
{
    let nome = listaAstroInformacoes[ indiceAtual ].nome;
    let descricao = listaAstroInformacoes[ indiceAtual ].descricao;
    let tamanho = listaAstroInformacoes[ indiceAtual ].tamanho;
    let temperatura = listaAstroInformacoes[ indiceAtual ].temperatura;
    let gravidade = listaAstroInformacoes[ indiceAtual ].gravidade;

    astroNome.innerText = nome;
    astroDescricao.innerText = descricao;
    astroTamanho.innerText = tamanho;
    astroTemperatura.innerText = temperatura;
    astroGravidade.innerText = gravidade;
}

// Array contendo as informações que serão adicionadas
const listaAstroInformacoes =
[
    {
        nome: "Terra",
        descricao: "A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul .",
        tamanho: "12.742 KM",
        temperatura: " -60ºC ~ 45ºC",
        gravidade: "9,8 M/S²",
    },
    {
        nome: "Lua",
        descricao: "A Lua é o único satélite natural da Terra e o quinto maior do Sistema Solar. É o maior satélite natural de um planeta no sistema solar em relação ao tamanho do seu corpo primário, tendo 27% do diâmetro e 60% da densidade da Terra.",
        tamanho: "3.474 KM",
        temperatura: "-184°C ~ 214°C",
        gravidade: "1,62 M/S²",
    },
    {
        nome: "Marte",
        descricao: "Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o \"Planeta Vermelho\", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.",
        tamanho: "6.779 KM",
        temperatura: "-125°C ~ 22°C",
        gravidade: "3,7 M/S²",
    },
]

// Elementos que terão o conteúdo modificado
const astroNome = document.getElementById( "astro-nome" );
const astroDescricao = document.getElementById( "astro-descricao" );
const astroTamanho = document.getElementById( "astro-tamanho" );
const astroTemperatura = document.getElementById( "astro-temperatura" );
const astroGravidade = document.getElementById( "astro-gravidade" );

// Botão para o próximo astro
const botaoProximo = document.getElementById( "astro-proximo" );
botaoProximo.addEventListener( "click", proximoAstro );

// Botão para o astro anterior
const botaoAnterior = document.getElementById( "astro-anterior" );
botaoAnterior.addEventListener( "click", astroAnterior );

// Indice do astro que está sendo exibido atualmente
let totalAstros = document.getElementsByClassName( "astro" ).length;
let indiceAtual = 0;

atualizarInformacoes();
