//vamos instanciar nossos elementos
const pokemonPic = document.querySelector('#pokemonPic');
const pokemonNumber = document.querySelector('#pokemonNumber');
const pokemonName = document.querySelector('#pokemonName');
const pokemonDescription = document.querySelector('#pokemonDescription');
const botoes = document.querySelectorAll('.pokeBtn');

const pokémon = {
    squirtle: {
        number: 7,
        name: 'Squirtle',
        image: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/7.svg',
        description: `Squirtle (Japonês: ゼニガメ Zenigame) é um Pokémon do tipo Água, categorizado como Pokémon Tartaruguinha e introduzido na Primeira Geração.
        É um dos três Pokémon iniciais da região de Kanto.`
    },
    charmander: {
        number: 4,
        name: 'Charmander',
        image: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/4.svg',
        description: `Charmander (Japonês: ヒトカゲ Hitokage) é um Pokémon do tipo Fogo introduzido na Primeira Geração.
        É um dos três Pokémon iniciais da região de Kanto.`
    },
    bulbassauro: {
        number: 1,
        name: 'Bulbassauro',
        image: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg',
        description: `Bulbassauro ou Bulbasaur (Japonês: フシギダネ Fushigidane) é um Pokémon dos tipos Grama e Venenoso introduzido na Primeira Geração.
        É um dos três Pokémon iniciais da região de Kanto.`
    },
}
console.log(pokémon.bulbassauro)

function botaoPokemon (nomePokemon){
    pokemonPic.setAttribute('src', pokémon[nomePokemon].image)
    pokemonNumber.textContent = pokémon[nomePokemon].number
    pokemonName.textContent = pokémon[nomePokemon].name
    pokemonDescription.textContent = pokémon[nomePokemon].description
}

const nav = document.querySelector('nav');
nav.addEventListener('click', event => {
    // if (event.target.textContent == 'Squirtle'){
    //     console.log(event.target.textContent);
    //     botaoPokemon('squirtle');
    // } else if (event.target.textContent == 'Bulbassauro'){
    //     botaoPokemon('bulbassauro');
    // } else {
    //     botaoPokemon('charmander');
    // }
    if (event.target.classList.contains('pokeBtn')){
        botaoPokemon(event.target.textContent.toLowerCase());
    }
})

function tocar(){
    const audio = new Audio ('flower-garden.ogg');
    audio.play();
    //descomente a linha abaixo para incluir a música
    //musica.play();
}

nav.addEventListener("click", function(event) {
    if (event.target.classList.contains('pokeBtn')){
    tocar();
}
}, {once : true});

/*
digite aqui o seu código
dica: utilize os data-attributes para obter o nome do pokemon clicado
https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Howto/Use_data_attributes
Utilize as constantes definidas no início do arquivo, que são:
botoes
pokemonPic
pokemonNumber
pokemonName
pokemonDescription
*/