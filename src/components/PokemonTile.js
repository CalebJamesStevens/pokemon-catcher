import { useEffect, useState } from 'react';
import Conditional from '../utility_components/Conditional';
import PokemonCard from './PokemonCard';
import './PokemonTile.css';

function PokemonTile({ pokemon, inventoryCard }) {
    const [selected, setSelected] = useState(false);

    return (
        <>
            <Conditional condition={selected}>
                <PokemonCard
                    pokemon={pokemon}
                    inventoryCard={inventoryCard}
                    setSelected={setSelected}
                />
            </Conditional>
            <li>
                <button
                    type='button'
                    onClick={() => {
                        setSelected(true);
                    }}
                    className='pokemonTile'
                >
                    <h3>{pokemon.name}</h3>
                    <img
                        width={96}
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
