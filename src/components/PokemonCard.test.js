import React from 'react';
import { ReactDOM } from 'react';
import {
    render,
    fireEvent,
    queryByRole,
    queryByAttribute,
} from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import Inventory from './Inventory';
import { store } from '../redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { testPokemon__Ditto } from '../testData';
import Navbar from './Navbar';
import CatchPokemon from './CatchPokemon';
import PokemonCard from './PokemonCard';

it('Renders Pokemon Card correctly', () => {
    const { queryByTestId } = render(
        <PokemonCard pokemon={testPokemon__Ditto} />
    );

    expect(queryByTestId('pokemonCard')).toBeTruthy();
    expect(queryByTestId('pokemonCard__name')).toBeTruthy();
});

it('Renders shows correct pokemon name', () => {
    const { queryByTestId } = render(
        <PokemonCard pokemon={testPokemon__Ditto} />
    );

    expect(queryByTestId('pokemonCard__name')).toBeTruthy();
    expect(queryByTestId('pokemonCard__name').textContent).toEqual('ditto');
});

it('Only renders close button if inventory card', () => {
    const { queryByTestId } = render(
        <PokemonCard pokemon={testPokemon__Ditto} inventoryCard={true} />
    );

    expect(queryByTestId('pokemonCard__closeButton')).toBeTruthy();
    expect(queryByTestId('pokemonCard__catchButton')).toBeFalsy();
    expect(queryByTestId('pokemonCard__closeButton').textContent).toEqual(
        'Close'
    );
});

it('Renders given name if inventory card', () => {
    const { queryByTestId } = render(
        <PokemonCard
            pokemon={{ ...testPokemon__Ditto, givenName: 'Bob' }}
            inventoryCard={true}
        />
    );

    expect(queryByTestId('pokemonCard__givenName')).toBeTruthy();
    expect(queryByTestId('pokemonCard__givenName').textContent).toEqual(
        '"Bob"'
    );
});

it('Renders close and catch button if not inventory card', () => {
    const { queryByTestId } = render(
        <PokemonCard pokemon={testPokemon__Ditto} inventoryCard={false} />
    );

    expect(queryByTestId('pokemonCard__closeButton')).toBeTruthy();
    expect(queryByTestId('pokemonCard__catchButton')).toBeTruthy();
    expect(queryByTestId('pokemonCard__closeButton').textContent).toEqual(
        'Run!'
    );
});
