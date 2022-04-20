import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

function Inventory() {
    const { pokemonList } = useSelector((state) => state.pokemon);

    return (
        <main>
            <h1>Inventory Page</h1>
            <section
                aria-labelledby='inventory-container-header'
                className='inventory-container'
            >
                <h2 id='inventory-container-header'>Inventory</h2>
                <ul id='inventory-list'>
                    {pokemonList.map((pokemon) => {
                        return (
                            <PokemonCard
                                key={Math.random()}
                                pokemon={pokemon}
                            />
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}

export default Inventory;
