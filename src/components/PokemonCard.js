import { useEffect, useState } from 'react';
import Conditional from '../utility_components/Conditional';
import DetailedPokemonCard from './DetailedPokemonCard';

function PokemonCard({ pokemon, inventoryCard }) {
    const [selected, setSelected] = useState(false);

    return (
        <li
            onClick={() => {
                setSelected(true);
            }}
            className='inventory-item'
        >
            <h3>{pokemon.name}</h3>
            <img src={`${pokemon.sprites.front_default}`} />
            <Conditional condition={selected}>
                <DetailedPokemonCard
                    pokemon={pokemon}
                    inventoryCard={inventoryCard}
                    setSelected={setSelected}
                />
            </Conditional>
        </li>
    );
}

export default PokemonCard;
