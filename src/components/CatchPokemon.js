import { useEffect } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { fetchRandomPokemon } from '../custom_modules/pokemonApi';
import PokemonTile from './PokemonTile';
import './CatchPokemon.css';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from '../redux/wildPokemonSlice';
import { PokemonContext } from '../contexts/PokemonContext';

function CatchPokemon() {
    const dispatch = useDispatch();
    const { wildPokemonList } = useSelector((state) => state.wildPokemon);
    const fetchPokemon = async () => {
        const p = await fetchRandomPokemon(10);

        dispatch(generate(p));
    };

    useEffect(() => {
        if (wildPokemonList.length > 0) return;
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
                <button
                    className='catchPokemon__reloadButton'
                    name='reload__pokemon'
                    type='button'
                    onClick={async (e) => {
                        e.preventDefault();
                        fetchPokemon();
                    }}
                >
                    <AiOutlineReload size={50} />
                </button>
                <ul className='catchPokemon__pokemonTiles'>
                    {wildPokemonList?.map((pokemon, index) => {
                        return (
                            <PokemonContext.Provider
                                key={index}
                                value={{ index }}
                            >
                                <PokemonTile
                                    inventoryCard={false}
                                    pokemon={pokemon}
                                />
                            </PokemonContext.Provider>
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}

export default CatchPokemon;
