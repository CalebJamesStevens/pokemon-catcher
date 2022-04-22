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
            <li
                onClick={() => {
                    setSelected(true);
                }}
                className='pokemonTile'
            >
                <h3>{pokemon.name}</h3>
                <img src={`${pokemon.sprites.front_default}`} />
            </li>
        </>
    );
}

export default PokemonTile;
