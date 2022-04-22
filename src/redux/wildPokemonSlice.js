import { createSlice } from '@reduxjs/toolkit';
import { fetchRandomPokemon } from '../custom_modules/pokemonApi';

const initialState = {
    wildPokemonList: [],
};

export const wildPokemonSlice = createSlice({
    name: 'wildPokemon',
    initialState,
    reducers: {
        remove: (state, action) => {
            if (state.wildPokemonList.length <= 0) return;
            state.wildPokemonList.splice(action.payload, 1);
        },
        generate: (state, action) => {
            state.wildPokemonList = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { remove, generate } = wildPokemonSlice.actions;

export default wildPokemonSlice.reducer;
