import './bootstrap';

const containerPokemonCard = document.querySelector('.pokemon-container');

function getPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
        })
};

document.documentElement('load', () => {

    for (let i = 1; i < 10; i++) {
        getPokemon(i);
    }
})

function createPokemon(params) {

    const container = document.createElement('div');
    container.classList.add('card');
    container.style.width = '18rem';


    `<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
}