
const wrapper = document.querySelector('#wrapper');

const pokemon = [
    {
        name: "Charmander",
        type: "fire",
        maxHp: 100,
        moves: ["Scratch", "Ember", "Flamethrower"],
        color: "red"
    },
    {
        name: "Squirtle",
        type: "water",
        maxHp: 110,
        moves: ["Tackle", "Water Gun", "Bite"],
        color: "blue"
    },
    {
        name: "Pikachu",
        type: "electric",
        maxHp: 95,
        moves: ["Quick Attack", "Thunder Shock", "Thunderbolt"],
        color: "orange"
    },
    {
        name: "Blastoise",
        type: "water",
        maxHp: 147,
        moves: ["Tail Whip", "Tackle", "Water Gun"],
        color: "darkblue"
    }
];

function renderPokemon() {
    wrapper.innerHTML = '';

    pokemon.forEach((item) => {
        const ele = document.createElement("div");
        const header = document.createElement("h2");
        const type = document.createElement("h3");
        const hp = document.createElement("p");
        const moves = document.createElement("p");

        ele.className = "pokemon";
        ele.style.color = item.color;

        header.innerHTML = item.name;
        type.innerHTML = "Type: " + item.type;
        hp.innerHTML = "Max HP: " + item.maxHp;
        moves.innerHTML = "Moves: " + item.moves.join(", ");

        ele.appendChild(header);
        ele.appendChild(type);
        ele.appendChild(hp);
        ele.appendChild(moves);

        wrapper.appendChild(ele);
    });
}

renderPokemon();
