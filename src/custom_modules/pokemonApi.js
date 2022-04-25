export const fetchRandomPokemon = (amount = 1) => {
    if (amount <= 0) return;
    return Promise.all(
        Array.from({ length: amount }, () => {
            return fetch(
                `https://pokeapi.co/api/v2/pokemon/${Math.floor(
                    Math.random() * 800
                )}`
            ).then((res) => res.json());
        })
    );
};
