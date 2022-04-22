export const fetchRandomPokemon = async (amount = 1) => {
    return await Promise.all(
        Array.from({ length: amount }, () => {
            return fetch(
                `https://pokeapi.co/api/v2/pokemon/${Math.floor(
                    Math.random() * 800
                )}`
            )
                .then((res) => res.json())
                .then((data) => {
                    return data;
                });
        })
    );
};
