import { useEffect, useRef, useState } from 'react';
import Conditional from '../utility_components/Conditional';
import CatchingForm from './CatchingForm';
import './PokemonCard.css';

function PokemonCard({ pokemon, setSelected, inventoryCard }) {
    const [catching, setCatching] = useState(false);
    const closeButton = useRef();

    useEffect(() => {
        if (!closeButton.current) return;
        closeButton.current.focus();
    }, []);

    return (
        <section className='pokemonCard__background'>
            <div className='pokemonCard popup'>
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
                        / {pokemon.types[1]?.type.name}
                    </Conditional>
                </p>
                <p className='pokemonCard__statsHeader'>Stats</p>
                <div className='pokemonCard__statsContainer'>
                    <div className='pokemonCard__stat'>
                        <div>HP</div>
                        <div>{pokemon.stats[0].base_stat}</div>
                    </div>
                    <div className='pokemonCard__stat'>
                        <div>Attack</div>
                        <div>{pokemon.stats[1].base_stat}</div>
                    </div>
                    <div className='pokemonCard__stat'>
                        <div>Defense</div>
                        <div>{pokemon.stats[2].base_stat}</div>
                    </div>
                    <div className='pokemonCard__stat'>
                        <div>Sp. Atk</div>
                        <div>{pokemon.stats[3].base_stat}</div>
                    </div>
                    <div className='pokemonCard__stat'>
                        <div>Sp. Def</div>
                        <div>{pokemon.stats[4].base_stat}</div>
                    </div>
                    <div className='pokemonCard__stat'>
                        <div>Speed</div>
                        <div>{pokemon.stats[5].base_stat}</div>
                    </div>
                </div>
            </div>
            <Conditional condition={inventoryCard}>
                <div className='pokemonCard__buttonsContainer'>
                    <button
                        ref={closeButton}
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
                    <Conditional condition={!catching}>
                        <button
                            ref={closeButton}
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
                    </Conditional>
                </div>
            </Conditional>
            <Conditional condition={catching}>
                <CatchingForm
                    pokemon={pokemon}
                    setSelected={setSelected}
                    setCatching={setCatching}
                />
            </Conditional>
        </section>
    );
}

export default PokemonCard;
