function PokemonCards() {
    const pokemon = pokemonList[0];

    return (
        <figure>
            {(pokemon.imgSrc != null) ? (
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                    alt="bulbasaur" />) : (
                <p>???</p>
            )}
            <figcaption>{pokemon.name}</figcaption>
        </figure>

    );
}

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

export default PokemonCards;