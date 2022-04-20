import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pokemonList:
        JSON.parse(localStorage.getItem('pokemon')).length > 0
            ? JSON.parse(localStorage.getItem('pokemon'))
            : [],
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        addToInventory: (state, action) => {
            state.pokemonList.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToInventory } = pokemonSlice.actions;

export default pokemonSlice.reducer;
