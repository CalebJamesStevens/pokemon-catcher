import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';
import wildPokemonReducer from './wildPokemonSlice';

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        wildPokemon: wildPokemonReducer,
    },
});
