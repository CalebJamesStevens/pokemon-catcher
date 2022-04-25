import { useEffect, useState } from 'react';
import Conditional from '../utility_components/Conditional';
import PokemonCard from './PokemonCard';
import './PokemonTile.css';

function PokemonTile({ pokemon, inventoryCard }) {
    const [selected, setSelected] = useState(false);
    const [focus, setFocus] = useState(false);
    return (
        <>
            <Conditional condition={selected}>
                <PokemonCard
                    pokemon={pokemon}
                    inventoryCard={inventoryCard}
                    setSelected={setSelected}
                    setFocus={focus}
                />
            </Conditional>
            <li>
                <button
                    type='button'
                    onClick={(e) => {
                        if (e.key === 'Enter') setFocus(true);
                        setSelected(true);
                    }}
                    data-testid='pokemonTile'
                    className='pokemonTile'
                >
                    <h3
                        data-testid='pokemonTile__name'
                        className='pokemonTile__name'
                    >
                        {pokemon.name}
                    </h3>
                    <img
                        role='presentation'
                        width={96}
                        data-testid='pokemonTile__image'
                        className='pokemonTile__image'
                        height={96}
                        src={`${pokemon.sprites.front_default}`}
                        alt={`Image of ${pokemon.name}`}
                    />
                </button>
            </li>
        </>
    );
}

export default PokemonTile;
