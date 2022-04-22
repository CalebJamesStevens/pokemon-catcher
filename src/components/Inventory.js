import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Conditional from '../utility_components/Conditional';
import PokemonTile from './PokemonTile';

function Inventory() {
    const { pokemonList } = useSelector((state) => state.pokemon);

    return (
        <main id='inventory-page'>
            <h1 className='hidden'>Inventory Page</h1>
            <section
                aria-labelledby='inventory-container-header'
                className='inventory-container'
            >
                <h2 id='inventory-container-header'>Inventory</h2>

                <Conditional condition={pokemonList.length > 0}>
                    <p>Is that really all the pokemon you can get? </p>
                    <Link className='darkbg-link' to='/catch-pokemon'>
                        Go catch some more!
                    </Link>

                    <ul id='inventory-list'>
                        {pokemonList.map((pokemon) => {
                            return (
                                <PokemonTile
                                    key={Math.random()}
                                    inventoryCard={true}
                                    pokemon={pokemon}
                                />
                            );
                        })}
                    </ul>
                </Conditional>
                <Conditional condition={pokemonList.length <= 0}>
                    <p>
                        It looks like you have no Pokemon!{' '}
                        <Link className='darkbg-link' to='/catch-pokemon'>
                            Go catch some!
                        </Link>
                    </p>
                </Conditional>
            </section>
        </main>
    );
}

export default Inventory;
