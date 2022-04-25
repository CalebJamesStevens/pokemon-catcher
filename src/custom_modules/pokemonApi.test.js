import React from 'react';
import { ReactDOM } from 'react';
import { fetchRandomPokemon } from './pokemonApi';

test('Fetch an array of Pokemon 10 objects', async () => {
    const x = await fetchRandomPokemon(10);
    expect(x).toHaveLength(10);
    expect(x[0]).toHaveProperty('name');
});

test('Return nothing when requesting 0 Pokemon objects', async () => {
    const x = await fetchRandomPokemon(0);
    expect(x).toBeUndefined();
});

test('Return 1 Pokemon object when no parameter is given', async () => {
    const x = await fetchRandomPokemon();
    expect(x).toHaveLength(1);
    expect(x[0]).toHaveProperty('name');
});
