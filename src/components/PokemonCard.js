import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToInventory } from '../redux/pokemonSlice';
import Conditional from '../utility_components/Conditional';
import './PokemonCard.css';

function PokemonCard({ pokemon, setSelected, inventoryCard }) {
    const [catching, setCatching] = useState(false);
    const givenName = useRef();

    const dispatch = useDispatch();
    const { pokemonList } = useSelector((state) => state.pokemon);

    return (
        <section className='pokemonCard__background'>
            <div className='pokemonCard'>
                <div className='pokemonCard__nameContainer'>
                    <Conditional condition={inventoryCard}>
                        <p className='pokemonCard__givenName'>
                            "{pokemon.givenName}"
                        </p>
                    </Conditional>
                    <p className='pokemonCard__name'>{pokemon.name}</p>
                </div>
                <img
                    className='pokemonCard__image'
                    src={pokemon.sprites.front_default}
                />
                <p className='pokemonCard__types'>
                    {pokemon.types[0].type.name}
                    <Conditional condition={pokemon.types.length > 1}>
                        {' '}
                        /{pokemon.types[1]?.type.name}
                    </Conditional>
                </p>
                <p className='pokemonCard__statsHeader'>Stats</p>
                <div className='pokemonCard__statsContainer'>
                    <p className='pokemonCard__stat'>
                        <div>HP</div>
                        <div>{pokemon.stats[0].base_stat}</div>
                    </p>
                    <p className='pokemonCard__stat'>
                        <div>Attack</div>
                        <div>{pokemon.stats[1].base_stat}</div>
                    </p>
                    <p className='pokemonCard__stat'>
                        <div>Defense</div>
                        <div>{pokemon.stats[2].base_stat}</div>
                    </p>
                    <p className='pokemonCard__stat'>
                        <div>Sp. Atk</div>
                        <div>{pokemon.stats[3].base_stat}</div>
                    </p>
                    <p className='pokemonCard__stat'>
                        <div>Sp. Def</div>
                        <div>{pokemon.stats[4].base_stat}</div>
                    </p>
                    <p className='pokemonCard__stat'>
                        <div>Speed</div>
                        <div>{pokemon.stats[5].base_stat}</div>
                    </p>
                </div>
            </div>
            <Conditional condition={inventoryCard}>
                <div className='pokemonCard__buttonsContainer'>
                    <button
                        className='pokemonCard__closeButton'
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelected(false);
                        }}
                    >
                        Close
                    </button>
                </div>
            </Conditional>
            <Conditional condition={!inventoryCard}>
                <div className='pokemonCard__buttonsContainer'>
                    <button
                        className='pokemonCard__closeButton'
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelected(false);
                        }}
                    >
                        No Thanks!
                    </button>
                    <button
                        className='pokemonCard__catchButton'
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
                            <input ref={givenName} name='name' type={'text'} />
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
        </section>
    );
}

export default PokemonCard;
