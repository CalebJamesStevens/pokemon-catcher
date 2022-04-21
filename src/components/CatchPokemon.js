import { useEffect, useState } from 'react';
import { fetchRandomPokemon } from '../custom_modules/pokemonApi';
import PokemonCard from './PokemonCard';

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
        <main id='catch-pokemon-page'>
            <h1 className='hidden'>Catch Pokemon Page</h1>
            <section
                aria-labelledby='available-pokemon-container-header'
                id='avaiable-pokemon-container'
            >
                <h2 id='available-pokemon-container-header'>
                    Here's some pokemon to catch! Get some!
                </h2>
                <ul className='avaiable-pokemon-list'>
                    {availablePokemon?.map((pokemon, index) => {
                        return (
                            <PokemonCard
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
