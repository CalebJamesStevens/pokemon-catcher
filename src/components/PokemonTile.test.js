import React from 'react';
import { ReactDOM } from 'react';
import {
    render,
    fireEvent,
    queryByRole,
    queryByAttribute,
    getByAltText,
} from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import Inventory from './Inventory';
import { store } from '../redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { testPokemon__Ditto } from '../testData';
import Navbar from './Navbar';
import CatchPokemon from './CatchPokemon';
import PokemonCard from './PokemonCard';
import PokemonTile from './PokemonTile';

it('Renders Pokemon Tile correctly', () => {
    const { queryByTestId } = render(
        <PokemonTile pokemon={testPokemon__Ditto} />
    );

    expect(queryByTestId('pokemonTile')).toBeTruthy();
});

it('Renders Pokemon name correctly', () => {
    const { queryByTestId } = render(
        <PokemonTile pokemon={testPokemon__Ditto} />
    );

    expect(queryByTestId('pokemonTile__name')).toBeTruthy();
    expect(queryByTestId('pokemonTile__name').textContent).toEqual('ditto');
});

it('Renders image correctly and contains correct alt text', () => {
    const { queryByTestId, getByAltText } = render(
        <PokemonTile pokemon={testPokemon__Ditto} />
    );

    expect(queryByTestId('pokemonTile__image')).toBeTruthy();
    expect(queryByTestId('pokemonTile__image')).toEqual(
        getByAltText('Image of ditto')
    );
});

it('Renders pokemon pop up upon clicking tile', () => {
    const { queryByTestId } = render(
        <PokemonTile pokemon={testPokemon__Ditto} />
    );

    const tile = queryByTestId('pokemonTile');

    fireEvent.click(tile);

    expect(queryByTestId('pokemonCard')).toBeTruthy();
});
