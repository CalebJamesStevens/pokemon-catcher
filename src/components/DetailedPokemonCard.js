import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToInventory } from '../redux/pokemonSlice';
import Conditional from '../utility_components/Conditional';

function DetailedPokemonCard({ pokemon, setSelected, inventoryCard }) {
    const [catching, setCatching] = useState(false);
    const givenName = useRef();

    const dispatch = useDispatch();
    const { pokemonList } = useSelector((state) => state.pokemon);

    return (
        <section id='detailed-pokemon-card'>
            <div className='pokemon-card-details-container'>
                <div className='pokemon-card-details-name'>
                    <Conditional condition={inventoryCard}>
                        <p>"{pokemon.givenName}"</p>
                    </Conditional>
                    <p>{pokemon.name}</p>
                </div>
                <img src={pokemon.sprites.front_default} />
                <div className='pokemon-card-details'>
                    <div className='base-stats'>
                        <p>
                            {pokemon.stats[0].stat.name}{' '}
                            {pokemon.stats[0].base_stat}
                        </p>
                        <p>
                            {pokemon.stats[1].stat.name}{' '}
                            {pokemon.stats[1].base_stat}
                        </p>
                        <p>
                            {pokemon.stats[2].stat.name}{' '}
                            {pokemon.stats[2].base_stat}
                        </p>
                    </div>
                    <div className='abilities'>
                        {pokemon.abilities.map((ability) => {
                            return (
                                <p key={ability.ability.name}>
                                    {ability.ability.name}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <Conditional condition={inventoryCard}>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelected(false);
                        }}
                    >
                        Close
                    </button>
                </Conditional>
                <Conditional condition={!inventoryCard}>
                    <div className='pokemon-card-buttons'>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelected(false);
                            }}
                        >
                            No Thanks!
                        </button>
                        <button
                            onClick={() => {
                                setCatching(true);
                            }}
                        >
                            Catch 'Em!
                        </button>
                    </div>
                    <Conditional condition={catching}>
                        <form id='catch-form'>
                            <p>Name your pokemon!</p>
                            <label>
                                <input
                                    ref={givenName}
                                    name='name'
                                    type={'text'}
                                />
                            </label>
                            <div>
                                <label>
                                    <button
                                        onClick={() => {
                                            dispatch(
                                                addToInventory({
                                                    ...pokemon,
                                                    givenName:
                                                        givenName.current.value,
                                                })
                                            );
                                        }}
                                    >
                                        Submit
                                    </button>
                                </label>
                                <label>
                                    <button
                                        onClick={() => {
                                            setCatching(false);
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </label>
                            </div>
                        </form>
                    </Conditional>
                </Conditional>
            </div>
        </section>
    );
}

export default DetailedPokemonCard;
