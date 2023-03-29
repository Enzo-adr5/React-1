import PropTypes from "prop-types"


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

PokemonCards.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isrequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}



export default PokemonCards;
