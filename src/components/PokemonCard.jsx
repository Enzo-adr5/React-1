function PokemonCards(props) {
    const pokemon = props

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



export default PokemonCards;
