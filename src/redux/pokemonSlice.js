import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pokemonList: localStorage.getItem('pokemon')
        ? JSON.parse(localStorage.getItem('pokemon'))
        : [],
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        addToInventory: (state, action) => {
            state.pokemonList.push(action.payload);
            localStorage.setItem('pokemon', JSON.stringify(state.pokemonList));
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToInventory } = pokemonSlice.actions;

export default pokemonSlice.reducer;
