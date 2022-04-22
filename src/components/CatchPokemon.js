import { useEffect, useState } from 'react';
import { fetchRandomPokemon } from '../custom_modules/pokemonApi';
import PokemonTile from './PokemonTile';
import './CatchPokemon.css';

function CatchPokemon() {
    const [availablePokemon, setAvailablePokemon] = useState(null);

    const fetchPokemon = async () => {
        const p = await fetchRandomPokemon(10);
        setAvailablePokemon(p);
    };

    useEffect(() => {
        if (availablePokemon) return;
        fetchPokemon();
    }, []);

    return (
        <main className='catchPokemon'>
            <h1 className='hidden'>Catch Pokemon Page</h1>
            <section
                aria-labelledby='catchPokemon__pokemonTilesContainerHeader'
                className='catchPokemon__pokemonTilesContainer'
            >
                <h2
                    className='catchPokemon__pokemonTilesContainerHeader'
                    id='catchPokemon__pokemonTilesContainerHeader'
                >
                    Here's some pokemon to catch! Get some!
                </h2>
                <ul className='catchPokemon__pokemonTiles'>
                    {availablePokemon?.map((pokemon, index) => {
                        return (
                            <PokemonTile
                                key={index}
                                inventoryCard={false}
                                pokemon={pokemon}
                            />
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}

export default CatchPokemon;
